const { Shop } = require("../db/shopModel");

const getAllShops = async () => {
  const data = await Shop.find();
  console.log(data);
  return {
    data,
  };
};

module.exports = {
  getAllShops,
};
