const faker = require('faker');

module.exports = () => {
  const users = Array.from({ length: 10 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  }));

  return { users };
};
