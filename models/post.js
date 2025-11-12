const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const Post = sequelize.define('Post', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    conteudo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'posts',
    timestamps: true
});

module.exports = Post;