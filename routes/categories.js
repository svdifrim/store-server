const router = require("express").Router();

const {
  getCategories,
  getCategory,
  createCategory
} = require("../controllers/categories");

const { validateIdSchema } = require("../middlewares/midlewares");
const { validatePathParams } = require("../middlewares/lib");

//products
router.get("/categories", getCategories);
router.get("/categories/:id", getCategory);
router.post("/categories", createCategory);

//categories
module.exports = router;
