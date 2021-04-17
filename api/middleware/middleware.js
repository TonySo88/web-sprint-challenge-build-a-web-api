const projectsModel = require("../projects/projects-model")

// Projects Router
function checkProjectData() {
    return (req, res, next) => {
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({
                message: "Name and/or description missing"
            })
        }

        next()
    }
}

// Actions Router
function checkActionData() {
    return (req, res, next) => {
        if(!req.body.project_id || !req.body.description || !req.body.notes) {
            res.status(400).json({
                messate: "Project ID, description, and/or notes missing"
            })
        }

        next()
    }
}

module.exports = {
    checkProjectData,
    checkActionData
}