const router = require("express").Router();

const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  editProduct
} = require("../controllers/products");

const { validateIdSchema } = require("../middlewares/midlewares");
const { validatePathParams } = require("../middlewares/lib");

//products
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", editProduct);

//categories
module.exports = router;
