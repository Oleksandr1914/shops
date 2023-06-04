const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = { Shop };
