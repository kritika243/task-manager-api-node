const { createCustomError } = require('../errors/custom-error')
const asyncWrapper = require('../middleware/async')
const Task = require('../models/Task')

const getAllTasks = asyncWrapper(async (req, res) => {

  const tasks = await Task.find({})
  res.status(200).json({ tasks })

})



const createNewTask = asyncWrapper(async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ message: error })
  }

})



const getTask = asyncWrapper(async (req, res) => {

  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task for the ${taskID} `, 404))

  }
  res.status(200).json({ task })



})



const updateTask = asyncWrapper(async (req, res) => {

  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true, runValidators: true
  })
  if (!task) {
    return next(createCustomError(`No task for the ${taskID} `, 404))
  }
  res.status(200).json({ task })
})



const deleteTask = asyncWrapper(async (req, res) => {

  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task for the ${taskID} `, 404))
  }
  res.status(200).json({ task })



})


module.exports = {
  getAllTasks, createNewTask, getTask, updateTask, deleteTask
}