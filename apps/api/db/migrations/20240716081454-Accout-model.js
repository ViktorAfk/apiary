
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Account", {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
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
      },
      type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      provider: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      providerAccountId: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      refresh_token: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      access_token: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      expires_at: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      token_type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      scope: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      id_token: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      session_state: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }

    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('Account')
  }
};
