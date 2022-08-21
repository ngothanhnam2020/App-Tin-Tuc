const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            field: 'topic_id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true,
        },
        topicName: {
            field: 'topic_name',
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            field: 'description',
            type: DataTypes.STRING,
            allowNull: false,
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

    return sequelize.define('topic', attributes, options);
}