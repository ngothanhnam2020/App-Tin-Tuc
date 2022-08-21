const bcrypt = require('bcryptjs');
const db = require('../helpers/db');

async function getTopic(id) {
    const obj = await db.Topic.findByPk(id);
    if (obj) {
        return obj;
    }
    return null;
}

async function getAll() {
    return await db.Topic.findAll();
}

async function getById(id) {
    return await getTopic(id);
}

async function saveOne(data) {

    const {
        id,
        name,
        description,
        status,
    } = data;

    const params = {
        id,
        topicName: name,
        description,
        status,
    };

    if (id == 0) {
        const result = await db.Topic.create(params);
        return result;
    } else {
        const result = await db.Topic.update(params, {
            where: { id: id }
        });
        return result;
    }
}

module.exports = {
    getAll,
    getById,
    saveOne,
};
