const route = require('express').Router();
const {db} = require('../config');
const {parseBodyData} = require('../CommonFunction');

async function sequelizeGuard(data = {}) {
  const {role = 'admin'} = data;
  // db.guard.init().allow('admin').to(['view', 'edit']).on('blog').commit();
  db.guard.init().allow(role).commit();
  return {status: true, data};
}

async function guardmodel() {}

async function modelPractice() {
  //   const project = await user.create({id: 23, firstName: 'project'});
  //   const project = await user.findByPk(23);
  //   const project = await user.findOne({ where: { id: 23 } });
  const project = await user.findOrCreate({where: {id: 24}, defaults: {firstName: 'findOrCreate'}});
  // console.log("🚀 :::::::: ~ created", created)
  // console.log("🚀 :::::::: ~ user", user)
  return {project};
}

async function makeUser(data) {
  return db.guard.makeUser(data);
}

async function roleBasedAuthorization(data) {
  const {role} = data;
  // const user = await db.guard._sequelize.models.User.findByPk(1);
  const user = await db.guard.models().GuardUser.findByPk(1);
  const isAllOf = await user.isAllOf([role]);
  const isAnyOf = await user.isAnyOf([role]);
  const isA = await user.isA(role);
  const isAn = await user.isAn(role);
  return {isAllOf, isAnyOf, isAn, isA};
}

async function assignRole(data) {
  let userModel = await db.guard._sequelize.models.User.findByPk(1);
  return db.guard.assignRole(userModel, data.role);
}

route.get('/makeUser', async (req, res) => {
  const data = parseBodyData(req);
  let result = await makeUser(data);
  res.send({result, msg: 'user created suggesfull'});
});

route.get('/roleBasedAuthorization', async (req, res) => {
  const data = parseBodyData(req);
  let result = await roleBasedAuthorization(data);
  res.send({result});
});

route.get('/assignRole', async (req, res) => {
  const data = parseBodyData(req);
  let result = await assignRole(data);
  res.send({result, msg: 'role assing success full'});
});

route.get('/modelPractice', async (req, res) => {
  let result = await modelPractice();
  res.send({result});
});
module.exports = route;
