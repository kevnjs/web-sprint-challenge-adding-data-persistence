// build your server here and require it from index.js
const express = require('express');
const server = express();
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const tasksRouter = require('./task/router')

server.use(express.json())

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;