const express = require('express');
const router = express.Router();
const newsService = require('../services/news.service');

// routes

router.get('/', getAll);
router.get('/id/:id', getById);
router.get('/topic/:id', getByTopic);
router.get('/search/:title', searchTitle);
router.post('/', saveOne);

module.exports = router;

// route functions

function getAll(req, res, next) {
    const { perPage = 10, page = 1, keyword = ''} = req.params;
    newsService.getAll(perPage, page, keyword)
        .then(data => res.json(data))
        .catch(next);
}

function getById(req, res, next) {
    newsService.getById(req.params.id)
        .then(data => res.json(data))
        .catch(next);
}

function getByName(req, res, next) {
    newsService.getByName(req.params.title)
        .then(data => res.json(data))
        .catch(next);
}

function getByTopic(req, res, next) {
    newsService.getByTopic(req.params.id)
        .then(data => res.json(data))
        .catch(next);
}

function searchTitle(req, res, next) {
    newsService.searchTitle(req.params.title)
        .then(data => res.json(data))
        .catch(next);
}

function saveOne(req, res, next) {
    newsService.saveOne(req.body)
        .then(data => res.json(data))
        .catch(next);
}