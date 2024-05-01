const express = require('express');
const router = express.Router();

const service = require('../services/users');

router.post("/authenticate", service.authenticate);
router.get('/all', service.getAllUser);
router.get('/:id', service.getUserByid);
router.patch('/:id', service.updateUser);
router.put('/add', service.addUser)
router.delete('/:id', service.deleteUser);

module.exports = router;
