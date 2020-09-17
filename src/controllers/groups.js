const Group = require('../models/Group');
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
};
