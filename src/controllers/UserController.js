const User = require('../models/User');

module.exports = {
  async store(request, response) {
    const { name, email, password } = request.body;
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
};
