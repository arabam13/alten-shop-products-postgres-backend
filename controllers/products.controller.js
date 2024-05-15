const db = require("../models");
const Products = db.products;
const dummyProducts = require("../products.json");

exports.seed = async (req, res) => {
  try {
    await Products.bulkCreate(dummyProducts.data);
    return res.status(201).json({ message: "Products Seeded Successfully" });
  } catch (err) {
    return res.status(500).json({ error: new Error("Something went wrong") });
  }
};

exports.findAll = async (req, res) => {
  const products = await Products.findAll({});
  return res.status(200).json(products);
};

exports.findOne = async (req, res) => {
  const product = await Products.findOne({ where: { id: +req.params.id } });
  if (!product) {
    return res.status(404).json({ error: new Error("Product not found") });
  }
  return res.status(200).json(product);
};

exports.create = async (req, res) => {
  const {
    code,
    name,
    description,
    price,
    quantity,
    inventoryStatus,
    category,
    image,
    rating,
  } = req.body;
  try {
    const product = await Products.create({
      code,
      name,
      description,
      price,
      quantity,
      inventoryStatus,
      category,
      image,
      rating,
    });
    return res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({ error: new Error("Something went wrong") });
  }
};

exports.update = async (req, res) => {
  const { code, name } = req.body;
  try {
    await Products.update({ code, name }, { where: { id: +req.params.id } });
    return res.status(200).json({ message: "Product Updated Successfully" });
  } catch (e) {
    return res.status(500).json({ error: new Error("Something went wrong") });
  }
};

exports.delete = async (req, res) => {
  try {
    await Products.destroy({ where: { id: +req.params.id } });
    return res.status(204).json({ message: "Product Deleted Successfully" });
  } catch (e) {
    return res.status(500).json({ error: new Error("Something went wrong") });
  }
};
