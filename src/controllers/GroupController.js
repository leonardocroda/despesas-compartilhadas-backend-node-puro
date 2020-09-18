const Group = require('../models/Group');
const User = require('../models/User');

module.exports = {
  async index(request, response) {
    const groups = await Group.findAll();
    return response.send(groups);
  },

  async store(request, response) {
    const { name } = request.body;
    const group = await Group.create({ name });
    return response.json(group);
  },

  async addUser(request, response) {
    const { group_id } = request.params;
    const { user_id } = request.body;

    const user = await User.findByPk(user_id);
    const group = await Group.findByPk(group_id);

    if (!group || !user) {
      return response.status(404).json({ error: 'User or Group not found' });
    }

    await group.addUser(user);

    response.status(201).json(user);
  },

  async removeUser(request, response) {
    const { group_id } = request.params;
    const { user_id } = request.body;

    const user = await User.findByPk(user_id);
    const group = await Group.findByPk(group_id);

    if (!group || !user) {
      return response.status(404).json({ error: 'User or Group not found' });
    }

    await group.removeUser(user);

    response.status(204).send({ success: `User ${user_id} Removed` });
  },

  async getUsers(request, response) {
    const { group_id } = request.params;

    const group = await Group.findByPk(group_id);

    if (!group) {
      return response.status(404).json({ error: 'User or Group not found' });
    }

    const users = await group.getUsers();

    return response.json(users);
  },
};

//getUser, removeUser, setUser etc
