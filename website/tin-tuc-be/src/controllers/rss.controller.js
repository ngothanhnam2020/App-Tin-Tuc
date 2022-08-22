const express = require('express');
const router = express.Router();
const rssService = require('../services/rss.service');

// routes
router.get('/topic/:id', getByTopic);

module.exports = router;

// route functions

function getByTopic(req, res, next) {
    rssService.getRss(req.params.id)
        .then(data => res.json(data))
        .catch(next);
}