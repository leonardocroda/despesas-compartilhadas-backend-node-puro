const users = [
  {
    id: 1,
    nome: 'leo',
    grupo: 1,
  },
  {
    id: 2,
    nome: 'andre',
    grupo: 1,
  },
];

const getUsers = async (request, response) => {
  return response.send(users);
};

const createUser = async (request, response) => {
  const user = request.body;
  users.push(user);

  return response.status(201).send(users);
};

module.exports = { getUsers, createUser };
