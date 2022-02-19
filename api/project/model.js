// build your `Project` model here
const db = require('../../data/dbConfig')

const getAllProjects = () => {
    return db('projects')
}

const createNewProject = (project) => {
    return db('projects')
    .insert(project)
    .then(([id]) => getProjectById(id))
}

const getProjectById = (id) => {
    return db('projects').where({project_id: id})
}

// const delProject = (id) => {
//     return db('projects').where('project_id', id).del();
// }

module.exports = {
    getAllProjects,
    createNewProject,
    getProjectById,
}