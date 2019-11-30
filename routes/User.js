const express = require('express');
const router = express.Router();

const controller = require('../models/User')

router
.get('/list', controller.getList)
.post('/add', controller.addUser)
.delete('/delete/:id', controller.deleteUser)
.put('/update/:id', controller.updateUser)

module.exports = router;