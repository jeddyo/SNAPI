const router = require('express').Router();
const userController = require('../../controllers/userController');

// /api/users
router.route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

// /api/users/:id
router.route('/:id')
    .get(userController.getSingleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;