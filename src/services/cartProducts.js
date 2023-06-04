const { Cart } = require("../db/cartModel");

const getCartProducts = async ({ ownerEmail, ownerPhone }) => {
  const user = await Cart.findOne({
    $or: [{ ownerEmail }, { ownerPhone }],
  });
  console.log(user);
  const data = await Cart.find(user);
  console.log(data);
  return {
    data,
  };
};

const addToCart = async ({
  price,
  ownerName,
  ownerEmail,
  ownerPhone,
  ownerAddress,
  order,
}) => {
  const user = await Cart.findOne({
    $or: [{ ownerEmail }, { ownerPhone }],
  });
  console.log(user);
  if (user) {
    const doc = await Cart.findOneAndUpdate(
      {
        $or: [{ ownerEmail }, { ownerPhone }],
      },
      { $push: { orders: order } },
      { upsert: true, useFindAndModify: false }
    );
    return { doc };
  } else {
    const doc = await Cart.create({
      price,
      ownerName,
      ownerPhone,
      ownerAddress,
      ownerEmail,
      orders: [order],
    });
    return { doc };
  }
};

module.exports = {
  getCartProducts,
  addToCart,
};
