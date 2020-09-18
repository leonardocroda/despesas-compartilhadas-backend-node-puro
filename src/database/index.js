const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Group = require('../models/Group');
const ExpensesGoals = require('../models/ExpensesGoals');
const User = require('../models/User');
const connection = new Sequelize(dbConfig);

Group.init(connection);
ExpensesGoals.init(connection);
User.init(connection);

ExpensesGoals.associate(connection.models);
Group.associate(connection.models);
User.associate(connection.models);

module.exports = connection;
