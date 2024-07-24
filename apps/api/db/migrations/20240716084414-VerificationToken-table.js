
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('VerificationToken', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },

      token: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },

      expires: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('VerificationToken');
  }
};
