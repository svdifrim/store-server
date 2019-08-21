const { categoriesDao } = require("../databaseStorage/daos");
const dao = categoriesDao;

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

  const categories = await dao.find();

  res.status(200).json(categories);
};

exports.getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await dao.findById(id);
  res.status(200).json(category);
};

exports.createCategory = async (req, res) => {
  const { body } = req;
  const category = await dao.add(body);

  res.status(201).json(category);
};
