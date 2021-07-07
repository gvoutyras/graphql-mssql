const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Currencies",
    {
      cur_code: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      units: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      cur_sign: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      cur_iso_code: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Authors",
      schema: "dbo",
      timestamps: false,
      indexes: [
        {
          name: "cur_code",
          fields: [{ name: "cur_code" }],
        },
      ],
    }
  );
};
