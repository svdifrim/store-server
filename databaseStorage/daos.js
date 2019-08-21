const MongoClient = require("../databaseStorage/clients/MongoClient");

const ProductsDatabase = require("../databaseStorage/ProductsDatabase");
const CategoriesDatabase = require("../databaseStorage/CategoriesDatabase");
const CartDatabase = require("../databaseStorage/CartDatabase");

const { Products } = require("../databaseStorage/models/products.model");
const { Categories } = require("../databaseStorage/models/categories.model");
const { Cart } = require("../databaseStorage/models/cart.model");

const productsClient = new MongoClient(Products);
const categoriesClient = new MongoClient(Categories);
const cartClient = new MongoClient(Cart);

module.exports = {
  productsDao: new ProductsDatabase(productsClient),
  categoriesDao: new CategoriesDatabase(categoriesClient),
  cartDao: new CartDatabase(cartClient)
};
