const ExpenseGoal = require('../models/ExpensesGoals');
const Group = require('../models/Group');
const User = require('../models/User');

module.exports = {
  async store(request, response) {
    const { owner_id, type } = request.params;
    const { name, value } = request.body;

    const owner =
      type == 'group'
        ? await Group.findByPk(owner_id)
        : await User.findByPk(owner_id);

    if (!owner) {
      return response.status(404).json({ error: 'Owner not found' });
    }

    const expenseGoal = await ExpenseGoal.create({
      type,
      name,
      value,
      group_id: type == 'group' ? owner_id : null,
      user_id: type == 'user' ? owner_id : null,
    });

    return response.status(201).json(expenseGoal);
  },

  async index(request, response) {
    const { owner_id, type } = request.params;

    const owner =
      type == 'group'
        ? await Group.findByPk(owner_id, {
            include: { association: 'expensesGoals' },
          })
        : await User.findByPk(owner_id, {
            include: { association: 'expensesGoals' },
          });

    return response.json(owner.expensesGoals);
  },
};
