// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const tasks = require('./model')

router.get('/', async (req, res) => {
    try {
        const allTasks = await tasks.getTasks()
        res.status(200).json(allTasks)
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
})

router.post('/', async (req, res) => {
    try {
        const newTask = await tasks.addTask(req.body)
        res.status(201).json(...newTask)
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
})

module.exports = router;