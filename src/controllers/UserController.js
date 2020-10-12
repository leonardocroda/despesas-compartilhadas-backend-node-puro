const User = require('../models/User');
const Group = require('../models/Group');

module.exports = {
  async store(request, response) {
    const { name, email, password } = request.body;
    console.log(request.body);
    const user = await User.create({
      name,
      email,
      password,
    });

    return response.status(201).send(user);
  },

  async index(request, response) {
    return response.status(200).json(await User.findAll());
  },

  async getGroups(request, response) {
    const { user_id } = request.params;
    const resp = await User.findAll({
      include: [
        {
          model: Group,
          as: 'groups',
          through: {
            attributes: [],
            where: { user_id: user_id },
          },
        },
      ],
    });

    const user = resp.filter((user) => {
      if (user.id == user_id) {
        return user;
      }
    });
    const groups = user[0].groups;
    return response.json(groups);
  },

  async login(request, response) {
    const { email, password } = request.body;
    try {
      const user = await User.findOne({ where: { email: email } });
      if (user.password == password) {
        return response.json({ id: user.id, email: user.email });
      } else {
        return response.status(401).send();
      }
    } catch (e) {
      return response.json({ e });
    }
  },
};
