'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          id: 1,
          text: '1',
          status: false,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          text: '2',
          status: false,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          text: '3',
          status: false,
          order: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          text: '4',
          status: false,
          order: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          text: '5',
          status: false,
          order: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );



    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('task', null, bulkDeleteOptions);
  }
};
