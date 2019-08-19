module.exports = class ProductsDatabase {
  constructor(client) {
    this.client = client;
  }

  async readProducts(params) {
    return await this.client.read(params);
  }

  async getProduct(id) {
    return await this.client.readById(id);
  }

  async createProduct(product) {
    return await this.client.create(product);
  }

  async addProductToCart(id) {
    return await this.client.addToCart(id);
  }

  async deleteProduct(id) {
    return await this.client.delete(id);
  }

  async editProduct(id, product) {
    return await this.client.edit(id, product);
  }
};
