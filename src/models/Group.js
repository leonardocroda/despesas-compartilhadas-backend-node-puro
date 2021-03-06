const { Model, DataTypes } = require('sequelize');

class Group extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ExpensesGoals, { as: 'expensesGoals' });
    this.belongsToMany(models.User, {
      foreignKey: 'group_id',
      through: 'user_groups',
      as: 'users',
    });
  }
}

module.exports = Group;
