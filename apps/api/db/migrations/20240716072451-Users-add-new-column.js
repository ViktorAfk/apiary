
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'emailVerified', {
      type: Sequelize.DataTypes.DATE,
      allowNull: true,
    })

    await queryInterface.addColumn('Users', 'image', {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    })
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'emailVerified');
    await queryInterface.removeColumn('Users', 'image');
  }
};
