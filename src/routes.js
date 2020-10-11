const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const groupController = require('./controllers/GroupController');
const userController = require('./controllers/UserController');
const expensesGoalsController = require('./controllers/ExpenseGoalController');

router.get('/', controllers.index);

router.get('/groups', groupController.index);
router.post('/groups', groupController.store);
router.post('/groups/AddUser', groupController.addUser);
router.post('/groups/RemoveUser', groupController.removeUser);
router.get('/groups/:group_id/GetUsers', groupController.getUsers);

router.get('/users', userController.index);
router.post('/users', userController.store);
router.post('/users/login', userController.login);
router.get('/users/:user_id/groups', userController.getGroups);

router.get('/:type/owner/:owner_id/expenses', expensesGoalsController.index);
router.post('/:type/owner/:owner_id/expenses', expensesGoalsController.store);

module.exports = router;
