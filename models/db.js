const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão com MySQL estabelecida com sucesso.');
        return true;
    } catch (error) {
        console.error('Erro na conexão com MySQL:', error);
        throw error;
    }
}

module.exports = { sequelize, testConnection };