const Sequelize = require('sequelize');
const {db} = require('../config');
const {guardOptions} = require('../Constant');

const queryInterface = db.getQueryInterface();

const createTable = require('./createTable');

createTable.up(queryInterface, Sequelize, guardOptions);
