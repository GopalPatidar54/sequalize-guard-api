require('dotenv').config();
const {Sequelize} = require('sequelize');
const SequelizeGuard = require('sequelize-guard');
console.log(process.env.SQL_PASSWORD)
const {options, guardOptions} = require('./Constant');
const db = new Sequelize(process.env.SQL_DATABASE,process.env.SQL_USERNAME, process.env.SQL_PASSWORD, options);
db.guard = new SequelizeGuard(db, guardOptions);

(async function () {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = {db};
