
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn(
          'Users',
          'id',
          {
            type: Sequelize.DataTypes.STRING,
            primaryKey: true,
            defaultValue: Sequelize.DataTypes.UUIDV4
          },
          { transaction: t },
        ),
      ]);
    });
  },


 down:(queryInterface, Sequelize) => {
  return queryInterface.sequelize.transaction(t => {
    return Promise.all([
      queryInterface.changeColumn('User', 'id',{
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
      }, { transaction: t }),
      queryInterface.removeColumn('Person', 'favoriteColor', {
        transaction: t,
      }),
    ]);
  });
  }
};
