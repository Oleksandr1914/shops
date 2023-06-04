const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 2,
      maxLength: 16,
      default: null,
      require: true,
    },
    price: {
      type: Number,
      min: 0,
      default: null,
      require: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
    },
    photo: {
      type: String,
      default: null,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
