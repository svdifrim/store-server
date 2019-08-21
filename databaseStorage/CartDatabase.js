const DAO = require("./DAO");

module.exports = class Cart extends DAO {
  async addProduct(userId, product) {
    let cart = (await this.find({ user: userId })).pop();
    if (!cart) {
      cart = await this.add({
        user: userId,
        products: []
      });
    }

    cart.products.push(product);

    return this.update(cart._id, cart);
  }

  async deleteProduct(productId, userId) {
    let cart = (await this.find({ user: userId })).pop();
    // console.log("Before:", cart.products.length);

    // const newCart = cart.products.filter(product => {
    //   let ok = true;
    //   if (!ok) {
    //     return;
    //   }
    //   product.id !== productId;
    //   ok = false;

    //   return ok;
    // });

    // console.log("After:", newCart.length);

    for (let i = 0; i < cart.products.length; i++) {
      if (cart.products[i]._id === cart.products[i]._id) {
        cart.products.splice(i, 1);
        break;
      }
    }
    return this.update(cart._id, cart);
  }

  async getCart(userId) {
    return this.find({ user: userId });
  }
};
