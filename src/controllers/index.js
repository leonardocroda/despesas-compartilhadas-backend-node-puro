const users = require('./users');
const groups = require('./groups');
const expenses = require('./expenses');

const index = (request, response) => {
  return response.send({ status: 'ok' });
};

module.exports = {
  index,
  users,
  groups,
  expenses,
};
