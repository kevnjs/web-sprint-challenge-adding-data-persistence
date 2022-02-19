// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources')
}

const addResource = (resource) => {
    return db('resources').insert(resource)
    .then(([id]) => getResourceById(id))
}

const getResourceById = (id) => {
    return db('resources').where({resource_id: id})
}

module.exports = {
    getResources,
    addResource
}