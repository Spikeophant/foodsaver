const { User } = require('../../models');

const userData = [
  {
    user_name: 'test_user_1',
    email: 'test_user_1@email.com',
    password: 'test_user_1_password',
  },
  {
    user_name: 'test_user_2',
    email: 'test_user_2@email.com',
    password: 'test_user_2_password',
  },
  {
    user_name: 'test_user_3',
    email: 'test_user_3@email.com',
    password: 'test_user_3_password',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;