module.exports = class ProductsDatabase {
  constructor(client) {
    this.client = client;
  }

  async readCategories(params) {
    return await this.client.read(params);
  }

  async getCategory(id) {
    return await this.client.readById(id);
  }

  async createCategory(category) {
    return await this.client.create(category);
  }
};
