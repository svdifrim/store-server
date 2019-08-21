const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { productSchema } = require("./products.model.js");

const cartSchema = new Schema({
  user: String,
  products: [productSchema]
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };
