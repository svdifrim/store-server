const router = require("express").Router();

const { addProduct, getCart, deleteProduct } = require("../controllers/cart");

const { validateIdSchema } = require("../middlewares/midlewares");
const { validatePathParams } = require("../middlewares/lib");

//products

router.post("/cart/:id", addProduct);
router.get("/cart", getCart);
router.delete("/cart/:id", deleteProduct);

//categories
module.exports = router;
