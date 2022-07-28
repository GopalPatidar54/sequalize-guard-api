const route = require('express').Router();
const {db} = require('../config');
const {parseBodyData} = require('../CommonFunction');

async function getRole(data) {
  const {role = 'admin'} = data;
  return db.guard.getRole(role);
}

// it's working properly
async function deleteRole(data) {
  const {role = ['admin']} = data;
  const res = db.guard.deleteRoles(role);
  return {res};
}

async function getAllRole() {
  return db.guard.allRoles();
}

async function makeRoles(data = {}) {
  const {role = ['admin']} = data;
  db.guard.makeRoles(role);
  return {message: 'role created successful'};
}

async function makeRole(data = {}) {
  const {role = 'admin'} = data;
  db.guard.makeRole(role);
  return {message: 'role created successful'};
}

async function findRoles() {
  const res = db.guard.findRoles();
  return {res};
}
// for associations between user/role/permission
/**
 * @params  role,actions,resources
 */
async function addPermsToRole(data) {
  const {role = 'admin', actions, resources} = data;
  return db.guard.addPermsToRole(role, actions, resources);
}

async function rmPermsFromRole(data) {
  const {role = 'admin', actions, resources} = data;
  return db.guard.rmPermsFromRole(role, actions, resources);
}

route.get('/getRole', async (req, res) => {
  const data = parseBodyData(req);
  let result = await getRole(data);
  res.send({result});
});

route.get('/deleteRole', async (req, res) => {
  const data = parseBodyData(req);
  let result = await deleteRole(data);
  res.send({message: 'deleted successfully'});
});

route.get('/getAllRole', async (req, res) => {
  let result = await getAllRole();
  res.send({result});
});

route.get('/insertRole', async (req, res) => {
  const data = JSON.parse(req.query.data);
  let result = await sequelizeGuard(data);
  res.send({result});
});

route.get('/makeRoles', async (req, res) => {
  const data = parseBodyData(req);
  let result = await makeRoles(data);
  res.send({result});
});

route.get('/makeRole', async (req, res) => {
  const data = parseBodyData(req);
  let result = await makeRole(data);
  res.send({result});
});

route.get('/findRoles', async (req, res) => {
  let result = await findRoles();
  res.send({result});
});

route.get('/addPermsToRole', async (req, res) => {
  const data = parseBodyData(req);
  let result = await addPermsToRole(data);
  res.send({result, msg: 'added permission To role successfully'});
});

route.get('/rmPermsFromRole', async (req, res) => {
  const data = parseBodyData(req);
  let result = await rmPermsFromRole(data);
  res.send({result, msg: 'removed permission To role successfully'});
});
module.exports = route;
