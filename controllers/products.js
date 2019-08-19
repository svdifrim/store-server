const ProductsClient = require("../databaseStorage/clients/ProductsClient");
const ProductsDatabase = require("../databaseStorage/ProductsDatabase");
const path = require("path");

const productsClient = new ProductsClient(
  path.resolve(__dirname, "../data/products.json")
);

const dao = new ProductsDatabase(productsClient);

exports.getProducts = async (req, res) => {
  const params = {
    id: "",
    manufacturerId: "",
    productTitle: "",
    img: "",
    imgAlt: "",
    price: "",
    categories: "",
    rating: "",
    age: "",
    brand: "",
    skinType: ""
  };

  const products = await dao.readProducts(params);

  res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await dao.getProduct(id);
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const { body } = req;
  const product = await dao.createProduct(body);

  res.status(201).json(product);
};

exports.addProductToCart = async (req, res) => {
  const { id } = req.params;
  const product = await dao.addProductToCart(id);
  res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await dao.deleteProduct(id);
  res.status(204).end();
};

exports.editProduct = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const product = await dao.editProduct(id, body);

  res.status(200).json(product);
};
