const express = require('express')
const app = express()

// routes
app.get('/', (req, res) => {
  res.send('Welcome')
})

const port = 5001

app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})


