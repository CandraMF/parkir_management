'use strict';
const faker = require('faker');

const users = [...Array(30)].map((user) => (
  {
    name          : faker.name.findName(),
    email         : faker.internet.email(),
    phone_number  : faker.phone.phoneNumber(),
    gender        : faker.random.number({'min': 0, 'max': 1}),
    createdAt     : new Date(),
    updatedAt     : new Date()
  }
))


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
