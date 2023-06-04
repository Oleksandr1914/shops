const express = require("express");
const { getProductController } = require("../controllers/products/getProducts");
const { asyncWrapper } = require("../helpers/apiHelpers");

const router = express.Router();

router.get("/:shop", asyncWrapper(getProductController));

module.exports = router;
