const { getAllShops } = require("../../services/getShops");

const getAllShopsController = async (req, res) => {
  const data = await getAllShops();

  res.json(data);
};

module.exports = { getAllShopsController };
