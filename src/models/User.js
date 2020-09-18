const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },

      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ExpensesGoals, { as: 'expensesGoals' });
    this.belongsToMany(models.Group, {
      foreignKey: 'user_id',
      through: 'user_groups',
      as: 'groups',
    });
  }
}

module.exports = User;
