'use strict';

const moment = require("moment")


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


     await queryInterface.bulkInsert('Argos', [
      {name: 'John Doe',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')},
      {name: 'Paul',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')},
      {name : 'Jacques',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')},
      {name: 'Henry',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss')}
      
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
