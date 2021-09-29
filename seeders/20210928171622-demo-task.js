'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          id: 1,
          text: 'seed 1',
          status: false,
          order: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          text: 'seed 2',
          status: false,
          order: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          text: 'seed 3',
          status: true,
          order: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          text: 'seed 4',
          status: false,
          order: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          text: 'seed 5',
          status: true,
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

     await queryInterface.bulkDelete('Tasks', null, {});
  }
};
