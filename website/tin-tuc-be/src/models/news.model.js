const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            field: 'news_id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        topicId: {
            field: 'topic_id',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        link: {
            field: 'link',
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            field: 'title',
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            field: 'content',
            type: DataTypes.STRING,
        },
        avatar: {
            field: 'avatar',
            type: DataTypes.STRING,
        },
        time: {
            field: 'time',
            type: DataTypes.STRING,
        },
        status: {
            field: 'status',
            type: DataTypes.BOOLEAN,
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
        }
    };

    const options = {
        freezeTableName: true,
    };

    return sequelize.define('news', attributes, options);
}
