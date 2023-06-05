const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      min: 0,
      default: null,
      require: true,
    },
    ownerEmail: {
      type: String,
      default: null,
      require: true,
    },
    ownerPhone: {
      type: Number,
      default: null,
      require: true,
    },
    ownerAddress: {
      type: String,
      default: null,
      require: true,
    },
    ownerName: {
      type: String,
      default: null,
      require: true,
    },
    quantityProduct: {
      type: Number,
      default: null,
      require: true,
    },
    orders: {
      type: Array,
      default: null,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };
