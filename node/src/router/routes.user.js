'use strict';

const express = require('express');
const userControllor = require('../controller/user');
const user = express.Router();

user
  .get('/add',userControllor.addUser)
  .post('/update',userControllor.updateUser)
  .get('/export',userControllor.exportCsv)
  .get('/',userControllor.getUser)


module.exports = user;