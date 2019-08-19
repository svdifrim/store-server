const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productTitle: { type: String, required: true },
    img: { type: String, required: true },
    imgAlt: { type: String, required: true },
    price: { type: Number, required: true },
    categories: { type: Array, required: true },
    rating: { type: Number, required: true },
    age: { type: Number, required: true },
    brand: { type: String, required: true },
    skinType: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
