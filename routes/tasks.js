const express = require('express')
const { getAllTasks } = require('../controller/tasks')
const router = express.Router()


router.route('/').get(getAllTasks)



module.exports = router