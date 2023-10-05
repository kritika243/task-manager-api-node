const express = require('express')
require('dotenv').config()
const app = express()
const taskRoutes = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', taskRoutes)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

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

