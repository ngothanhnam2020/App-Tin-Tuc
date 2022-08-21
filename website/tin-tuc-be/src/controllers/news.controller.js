const express = require('express');
const router = express.Router();
const newsService = require('../services/news.service');

// routes

router.get('/', getAll);
router.get('/id/:id', getById);
router.get('/topic/:id', getByTopic);
router.get('/search', searchTitle);
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
    console.log(req.params.id);
    newsService.getById(req.params.id)
        .then(data => res.json(data))
        .catch(next);
}

function getByTopic(req, res, next) {
    console.log('getByTopic', req.params.id)
    newsService.getByTopic(req.params.id)
        .then(data => res.json(data))
        .catch(next);
}

function searchTitle(req, res, next) {
    newsService.searchTitle(req.query.keyword)
        .then(data => res.json(data))
        .catch(next);
}

function saveOne(req, res, next) {
    newsService.saveOne(req.body)
        .then(data => res.json(data))
        .catch(next);
}