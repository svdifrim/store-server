const IClient = require("./client");
const uuidv4 = require("uuid/v4");

module.exports = class MongoClient extends IClient {
  constructor(model) {
    super();
    this.model = model;
  }

  async find(params) {
    try {
      const items = await this.model.find(params);

      return items;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id) {
    try {
      const item = await this.model.findById(id);
      return item;
    } catch (error) {
      console.log(error);
    }
  }

  async create(item) {
    try {
      const newItem = new this.model({ ...item });

      const createdItem = await newItem.save();

      return createdItem;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id) {
    try {
      const removedItem = await this.model.findOneAndDelete(id);
      return removedItem;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, updatedAttributes) {
    try {
      let item = await this.model.findById(id);

      Object.keys(updatedAttributes).forEach(key => {
        item[key] = updatedAttributes[key];
      });

      const updatedItem = await item.save();

      return updatedItem;
    } catch (error) {
      console.log(error);
    }
  }
};
