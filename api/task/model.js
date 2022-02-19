// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks')
}

const addTask = (task) => {
    return db('tasks')
    .insert(task)
    .then(([id]) => getTaskById(id))
}

const getTaskById = (id) => {
    return db('tasks').where({task_id: id})
}

module.exports = {
    getTasks,
    addTask
}