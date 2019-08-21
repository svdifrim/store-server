class IClient {
  find(params) {
    throw new Error("Method read not implemented");
  }

  findById(id) {
    throw new Error("Method readById not implemented");
  }

  create(item) {
    throw new Error("Method create not implemented");
  }

  remove(id) {
    throw new Error("Method delete not implemented");
  }

  update(id, item) {
    throw new Error("Method params not implemented");
  }
}

module.exports = IClient;
