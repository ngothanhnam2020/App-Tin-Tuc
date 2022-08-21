const express = require('express');
const router = express.Router();
const topicService = require('../services/topic.service');

// routes

router.get('/', getAll);
router.get('/id/:id', getById);
router.post('/', saveOne);

module.exports = router;

// route functions

function getAll(req, res, next) {
    topicService.getAll()
        .then(data => res.json(data))
        .catch(next);
}

function getById(req, res, next) {
    topicService.getById(req.params.id)
        .then(data => res.json(data))
        .catch(next);
}

function saveOne(req, res, next) {
    topicService.saveOne(req.body)
        .then(data => res.json(data))
        .catch(next);
}