const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Group = require('../models/Group');

const connection = new Sequelize(dbConfig);

Group.init(connection);

module.exports = connection;
