var router = require('express').Router();
var usersController = require('./../../controllers/users.controller');

router.get('/users',  usersController.listUsers);
router.post('/users', usersController.createUser);
router.get('/users/me',  usersController.getSelfUser);
router.get('/users/:id', usersController.getOneUser);
router.put('/users/:id/name', usersController.changeName);
router.put('/users/:id/password', usersController.changePassword);
router.put('/users/:id/email', usersController.changeEmail);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;