const route = require('express').Router();
const {db} = require('../config');
const {parseBodyData} = require('../CommonFunction');

async function createPerms(data) {
  const {perms} = data;
  db.guard.createPerms(perms);
}

async function createPermsBulk(data) {
  const {perms} = data;
  db.guard.createPermsBulk(perms);
}

async function findPerms() {
  return db.guard.findPerms();
}

route.get('/createPerms', async (req, res) => {
  const data = parseBodyData(req);
  await createPerms(data);
  res.send({message: 'permission created successful'});
});
route.get('/createPermsBulk', async (req, res) => {
  const data = parseBodyData(req);
  await createPermsBulk(data);
  res.send({message: 'bulk permission created successful'});
});

route.get('/findPerms', async (req, res) => {
  let result = await findPerms();
  res.send({result});
});

module.exports = route;
