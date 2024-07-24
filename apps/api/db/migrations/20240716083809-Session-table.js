
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Session', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.DataTypes.INTEGER
    },
    expires: {
      allowNull: false,
      type: Sequelize.DataTypes.DATE
    },
    sessionToken: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id'
        },
        allowNull: false
    }

   })
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Session');
  }
};
