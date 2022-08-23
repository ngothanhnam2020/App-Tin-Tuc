const db = require('../helpers/db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function getNews(id) {
    const obj = await db.News.findByPk(id);
    return obj;
}

async function getById(id) {
    return await getNews(id);
}

async function getNewsName(title) {
    const s = '%' + title +'%'
    const obj = await db.News.findAll({
        where: {
            title: {
              [Op.like]: s
            }
        },
        include: ['topic'],
        order: [
            ['id', 'DESC'],
        ],
    });
    return obj;
}

async function getByName(title) {
    return await getNewsName(title);
}

async function getAll(perPage, page, keyword) {
    return await db.News.findAll({
        include: ['topic'],
        order: [
            ['id', 'DESC'],
        ],
    });
}

async function searchTitle(keyword) {
    const s = '%' + keyword +'%'
    return await db.News.findAll({
        where: {
            title: {
              [Op.like]: s
            }
        },
        include: ['topic'],
        order: [
            ['id', 'DESC'],
        ],
    });
}

async function getByTopic(topicId) {
    return db.News.findAll({
        where: {
            topicId: topicId
        }
    });
}

async function saveOne(data) {

    const {
        id,
        topicId,
        code,
        link,
        title,
        content,
        time,
        status
    } = data;

    const params = {
        id,
        topicId,
        code,
        link,
        title,
        content,
        time,
        status
    };

    if (id == 0) {
        const result = await db.News.create(params);
        return result;
    } else {
        const result = await db.News.update(params, {
            where: { id: id }
        });
        return result;
    }
}

module.exports = {
    getAll,
    getById,
    getByTopic,
    saveOne,
    searchTitle,
};
