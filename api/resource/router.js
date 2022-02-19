// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const resources = require('./model')


router.get('/', async (req, res) => {
    try {
        const projResource = await resources.getResources()
        res.status(200).json(projResource)
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
})

router.post('/', async (req, res) => {
    try {
        const newResource = await resources.addResource(req.body)
        res.status(201).json(...newResource)
    }
    catch {
        res.status(500).json({message: "An error occurred"})
    }
})

module.exports = router;