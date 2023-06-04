const express = require("express");
const {
  addCartController,
  getCartController,
} = require("../controllers/cart/cartControllers");
const { asyncWrapper } = require("../helpers/apiHelpers");

const router = express.Router();

router.post("/", asyncWrapper(addCartController));
router.get("/", asyncWrapper(getCartController));

module.exports = router;
