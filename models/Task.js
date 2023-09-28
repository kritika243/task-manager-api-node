const mongoose = require('mongoose')


const TaskSChema = new mongoose.Schema({
  name: String, completed: Boolean
})


module.exports = mongoose.model('Task', TaskSChema)