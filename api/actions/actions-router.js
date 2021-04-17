// Write your "actions" router here!
const express = require("express");
const actions = require("./actions-model");
const { checkActionData } = require("../middleware/middleware")

const router = express.Router();

router.get("/api/actions", (req, res, next) => {
  actions
    .get(req.query.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch(next);
});

router.get("/api/actions/:id", (req, res, next) => {
  actions
    .get(req.params.id)
    .then((action) => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({
          message: "This action with the specified ID does not exist",
        });
      }
    })
    .catch(next);
});

router.post("/api/actions", checkActionData(), (req, res, next) => {
  actions
    .insert(req.body)
    .then(project => {
        res.status(201).json(posts)
    })
    .catch(next)
});

router.put("/api/actions/:id", checkActionData(), (req, res, next) => {
    actions
        .update(req.params.id, req.body)
        .then(action => {
            if (action) {
                status(200).json(project)
            } else {
                res.status(400).json({
                    message: "This action could not be found"
                })
            }
        })
        .catch(next)
})

router.delete('/api/actions/:id', (req, res, next) => {
    actions
        .remove(req.params.id)
        .then(action => {
            if(!action) {
                res.status(200).json({
                    message: "This action has been deleted"
                })
            } else {
                res.status(404).json({
                    message: "The action wit the specified ID does not exist"
                })
            }
        })
        .catch(next)
})

module.exports = router;
