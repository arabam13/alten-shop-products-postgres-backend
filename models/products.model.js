module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "products",
    {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      inventoryStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.NUMBER,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
  return Products;
};
