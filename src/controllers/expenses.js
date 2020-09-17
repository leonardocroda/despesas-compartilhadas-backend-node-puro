const expenses = [
  {
    id: 1,
    ownerType: 'group',
    ownerId: 1,
    name: 'mercado',
    value: 300,
  },
];

const getExpenses = async (request, response) => {
  return response.send(expenses);
};

module.exports = { getExpenses };
