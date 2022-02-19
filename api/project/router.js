// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const projects = require('./model')

router.get('/', async (req, res) => {
    try {
        const allProjects = await projects.getAllProjects()
        res.status(200).json(allProjects)
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
    
})

router.post('/', async (req, res) => {
    try {
    const createProject = await projects.createNewProject(req.body)
    res.status(201).json(...createProject)
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
})


module.exports = router;