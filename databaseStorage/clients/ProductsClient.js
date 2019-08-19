const IClient = require("./client");
let Products = require("../models/products.model");
const fs = require("fs");
const uuidv4 = require("uuid/v4");

module.exports = class FileClient extends IClient {
  constructor(fileName) {
    super();
    this.fileName = fileName;
  }

  //READ FROM FILE / OR DATABASE

  // readFromFile() {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile(this.fileName, async (err, data) => {
  //       if (err) {
  //         return reject(err);
  //       }

  //       return await resolve(JSON.parse(data));
  //     });
  //   });
  // }

  // //WRITE TO FILE / OR TO DATABASE

  // writeToFile(json) {
  //   return new Promise((resolve, reject) => {
  //     fs.writeFile(this.fileName, json, err => {
  //       if (err) {
  //         return reject(err);
  //       }

  //       return resolve(json);
  //     });
  //   });
  // }

  //CRUD METHODS

  async read(params) {
    try {
      const products = await Products.find();
      return products;
    } catch (error) {
      return error;
    }

    // const items = await this.readFromFile();
    // const props = Object.keys(params);
    // return items.filter(item => {
    //   let isOk = true;
    //   props.forEach((prop, index) => {
    //     const itemKeys = Object.keys(item);
    //     if (!isOk) {
    //       return;
    //     }
    //     if (prop !== itemKeys[index]) {
    //       isOk = false;
    //     }
    //   });
    //   return isOk;
    // });
    // return items;
  }

  async readById(id) {
    try {
      const product = await Products.findById(id);
      return product;
    } catch (error) {
      return error;
    }
  }

  async create(item) {
    try {
      const newProduct = new Products({ ...item });
      const addedProduct = await newProduct.save();

      return addedProduct;
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      await Products.findOneAndDelete(id);
    } catch (error) {
      return error;
    }
  }

  async edit(id, itemNew) {
    try {
      let product = await Products.findById(id);

      product.productTitle = itemNew.productTitle;
      product.img = itemNew.img;
      product.imgAlt = itemNew.imgAlt;
      product.price = itemNew.price;
      product.categories = itemNew.categories;
      product.rating = itemNew.rating;
      product.age = itemNew.age;
      product.brand = itemNew.brand;
      product.skinType = itemNew.skinType;

      const editedProduct = await product.save();

      return editedProduct;
    } catch (error) {
      return error;
    }
  }

  //CART

  async addToCart(id) {
    // let cart = await this.readFromCartFile();
    // let items = await this.readFromFile();
    // let item = items.find(item => {
    //   return item.id === id;
    // });
    // cart = [...cart, item];
    // const serializedItems = JSON.stringify(cart);
    // this.writeToCartFile(serializedItems);
    // return item;
  }
};
