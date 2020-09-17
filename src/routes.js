const express = require('express');
const router = express.Router();
const routes = require('./controllers');

router.get('/', routes.index);

router.get('/groups', routes.groups.index);
router.post('/groups', routes.groups.store);

router.get('/users', routes.users.getUsers);
router.post('/users', routes.users.createUser);

router.get('/expenses', routes.expenses.getExpenses);

module.exports = router;
