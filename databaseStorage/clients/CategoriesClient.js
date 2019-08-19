const IClient = require("./client");
let Categories = require("../models/categories.model");

module.exports = class CategoriesClient extends IClient {
  constructor(fileName) {
    super();
    this.fileName = fileName;
  }

  async read(params) {
    try {
      const categories = await Categories.find();
      return categories;
    } catch (error) {
      return error;
    }
  }

  async readById(id) {
    try {
      const categories = await Categories.findById(id);
      return categories;
    } catch (error) {
      return error;
    }
  }

  async create(item) {
    try {
      const newCategory = new Categories({ ...item });
      const addedCategory = await newCategory.save();

      return addedCategory;
    } catch (error) {
      return error;
    }
  }
};
