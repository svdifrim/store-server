const CategoriesClient = require("../databaseStorage/clients/CategoriesClient");
const CategoriesDatabase = require("../databaseStorage/CategoriesDatabase");
const path = require("path");

const categoriesClient = new CategoriesClient(
  path.resolve(__dirname, "../data/products.json")
);

const dao = new CategoriesDatabase(categoriesClient);

exports.getCategories = async (req, res) => {
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

  const categories = await dao.readCategories(params);

  res.status(200).json(categories);
};

exports.getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await dao.getCategory(id);
  res.status(200).json(category);
};

exports.createCategory = async (req, res) => {
  const { body } = req;
  const category = await dao.createCategory(body);

  res.status(201).json(category);
};
