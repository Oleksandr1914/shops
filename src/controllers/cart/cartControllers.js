const { getCartProducts } = require("../../services/cartProducts");
const { addToCart } = require("../../services/cartProducts");

const getCartController = async (req, res) => {
  const body = req.body;

  const data = await getCartProducts(body);

  res.json(data);
};

const addCartController = async (req, res) => {
  const body = req.body;

  const data = await addToCart(body);
  res.json(data);
};

module.exports = { getCartController, addCartController };
