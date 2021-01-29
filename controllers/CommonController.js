import Sequelize from "sequelize";
const db = require('../models/Model');

export default class CommonController {
    constructor() {
        this.Sq = Sequelize;
        this.sequelize = db.sequelize;
        this.models = db.sequelize.models;
    }
}