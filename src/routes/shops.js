const express = require("express");
const { getAllShopsController } = require("../controllers/shops/getShops");
const { asyncWrapper } = require("../helpers/apiHelpers");

const router = express.Router();

router.get("/", asyncWrapper(getAllShopsController));

module.exports = router;
