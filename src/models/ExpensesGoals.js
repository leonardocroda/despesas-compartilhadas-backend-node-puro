const { Model, DataTypes } = require('sequelize');

class ExpensesGoals extends Model {
  static init(sequelize) {
    super.init(
      {
        type: DataTypes.STRING,
        name: DataTypes.STRING,
        value: DataTypes.FLOAT,
      },

      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Group, { foreignKey: 'group_id', as: 'group' });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = ExpensesGoals;
