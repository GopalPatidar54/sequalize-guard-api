require('./config');
const express = require('express');
const app = express();

const userRoute = require('./API/user');
const userRole = require('./API/role');
const userPerms = require('./API/permission');

app.get('/', (req, res) => {
  res.send({messsage: 'server start'});
});

app.use('/user', userRoute);
app.use('/role', userRole);
app.use('/perms', userPerms);

app.listen(5003, () => {
  console.log('server started');
});
