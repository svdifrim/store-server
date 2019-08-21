const { productsDao } = require("../databaseStorage/daos");
const dao = productsDao;

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

  const products = await dao.find();

  res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await dao.findById(id);
  res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const { body } = req;
  const product = await dao.add(body);

  res.status(201).json(product);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await dao.remove(id);
  res.status(204).end();
};

exports.editProduct = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const product = await dao.update(id, body);

  res.status(200).json(product);
};
