const { getShopProducts } = require("../../services/getProducts");

const getProductController = async (req, res) => {
  const { shop } = req.params;

  const data = await getShopProducts(shop);

  res.json(data);
};

module.exports = { getProductController };
