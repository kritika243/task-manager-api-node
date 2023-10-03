const express = require('express')
require('dotenv').config()
const app = express()
const taskRoutes = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')


// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', taskRoutes)
app.use(notFound)

const port = 5001

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_STRING)
    app.listen(port, () => {
      console.log(`server is listening on ${port}`)
    })

  } catch (error) {
    console.log(error)
  }
}


start()

