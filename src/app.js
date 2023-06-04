const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const productsRouter = require("./routes/products");
const shopsRouter = require("./routes/shops");
const cartRouter = require("./routes/cart");
const { errorHandler } = require("./helpers/apiHelpers");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/api/shop", productsRouter);
app.use("/api/", shopsRouter);
app.use("/api/cart", cartRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

module.exports = app;
