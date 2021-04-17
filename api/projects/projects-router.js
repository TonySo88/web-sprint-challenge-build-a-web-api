// Write your "projects" router here!
const express = require('express')
const projects = require('./projects-model')
const { checkProjectData } = require('../middleware/middleware')

const router = express.Router()

router.get('/api/projects', (req, res, next) => {
    projects
        .get(req.query.id)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.get('/api/projects/:id', (req, res, next) => {
    projects
        .get(req.params.id)
        .then(project => {
            if (!project) {
                res.status(404).json({
                    message: "Post not found"
                })
            } else {
                res.status(200).json(project)
            }
        })
        .catch(next)
})

router.post('/api/projects', checkProjectData(), (req, res, next) => {
    projects
        .insert(req.body) 
        .then(project => {
            res.status(201).json(project)
        }) 
        .catch(next)
})

router.put('/api/projects/:id', checkProjectData(), (req, res, next) => {
    projects
        .update(req.params.id, req.body)
        .then(project => {
            if (project) {
                res.status(200).json(project)
            } else {
                res.status(404).json({
                    message: "This project could not be found"
                })
            }
        })
        .catch(next)
})

router.delete('/api/projects/:id', (req, res, next) => {
    projects
        .remove(req.params.id)
        .then(project => {
            if (!project) {
                res.status(200).json({
                    message: "This project has been deleted"
                })
            } else {
                res.status(404).json({
                    message: "The project with this specific ID does not exist"
                })
            }
        })
        .catch(next)
})

router.get('/api/projects/:id/actions', (req, res, next) => {
    projects
        .getProjectActions(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

module.exports = router