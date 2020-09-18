const express = require('express');
const router = express.Router();
const controllers = require('./controllers');
const groupController = require('./controllers/GroupController');
const userController = require('./controllers/UserController');
const expensesGoalsController = require('./controllers/ExpenseGoalController');

router.get('/', controllers.index);

router.get('/groups', groupController.index);
router.post('/groups', groupController.store);
router.post('/groups/:group_id/AddUser', groupController.addUser);
router.post('/groups/:group_id/RemoveUser', groupController.removeUser);
router.get('/groups/:group_id/GetUsers', groupController.getUsers);

router.get('/users', userController.index);
router.post('/users', userController.store);

router.get(
  '/:type/owner/:owner_id/expenses-goals',
  expensesGoalsController.index
);
router.post(
  '/:type/owner/:owner_id/expenses-goals',
  expensesGoalsController.store
);

module.exports = router;
