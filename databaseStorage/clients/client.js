class IClient {
  read(params) {
    throw new Error("Method read not implemented");
  }

  readById(id) {
    throw new Error("Method readById not implemented");
  }

  create(product) {
    throw new Error("Method create not implemented");
  }

  delete(id) {
    throw new Error("Method delete not implemented");
  }

  edit(id) {
    throw new Error("Method params not implemented");
  }

  addToCart(id) {
    throw new Error("Method params not implemented");
  }
}

module.exports = IClient;
