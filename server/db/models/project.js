const { DataTypes, Model } = require('sequelize');
const db = require('../init');

class Project extends Model {}

Project.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    headerImage: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'project',
  }
);

module.exports = Project;
