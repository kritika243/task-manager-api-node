const express = require('express')
const app = express()
const taskRoutes = require('./routes/tasks')


// middleware
app.use(express.json())

app.use('/api/v1/tasks', taskRoutes)

const port = 5001

app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})


