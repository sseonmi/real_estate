const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = require(path.join(__dirname, '..', 'configs', 'config.json'));
const db = {};

const sequelize = new Sequelize(
    config.mysql.database, config.mysql.username, config.mysql.password, config.mysql, {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false
    });

fs
    .readdirSync(__dirname)
    .filter(
        file =>
            file.indexOf(".") !== 0 &&
            file !== path.basename(__filename) &&
            file.slice(-3) === ".js"
    )
    .forEach(file => {
        const Model = require(path.join(__dirname, file));
        Model["initialize"](sequelize)
    })

Object.values(sequelize.models)
    .filter(model => typeof model.associate === "function")
    .filter(model => model.associate(sequelize.models))

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

