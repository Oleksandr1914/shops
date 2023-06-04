const { Product } = require("../db/productModel");
const { Shop } = require("../db/shopModel");

const getShopProducts = async (shop) => {
  const { _id } = await Shop.findOne({ title: shop });

  const data = await Product.find({ owner: _id });
  console.log(data);
  return {
    data,
  };
};

module.exports = {
  getShopProducts,
};
