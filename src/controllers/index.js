const index = (request, response) => {
  return response.send({ status: 'ok' });
};

module.exports = {
  async index(request, response) {
    return response.send({ status: 'ok' });
  },
};
