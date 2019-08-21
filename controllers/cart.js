const { productsDao, cartDao } = require("../databaseStorage/daos");

exports.getCart = async (req, res) => {
  const { user } = req.headers;

  const cart = await cartDao.getCart(user);

  res.status(200).json(cart);
};

exports.addProduct = async (req, res) => {
  const { id } = req.params;
  const { user } = req.headers;

  const product = await productsDao.findById(id);
  const cart = await cartDao.addProduct(user, product);

  res.status(200).json(cart);
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { user } = req.headers;

  const products = await cartDao.deleteProduct(id, user);
  res.status(200).json(products);
};
