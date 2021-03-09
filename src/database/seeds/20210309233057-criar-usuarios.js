const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Luiz',
        email: 'luiz@otavio',
        password_hash: await bcryptjs.hasj('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {},
  ),

  down: () => { },
};
