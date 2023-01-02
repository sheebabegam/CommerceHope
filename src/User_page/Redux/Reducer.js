const Reducer = (cart = [], action) => {
  console.log("Mycart is", cart);
  localStorage.setItem("cart", JSON.stringify(cart));

  var cart1 = JSON.parse(localStorage.getItem("cart"));

  if (action.type === "ADD") {
    let tempcart = cart1.filter((product) => product?.id === action.payload.id);
    console.log("TEMP cart is", tempcart);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      return cart1;
    }
  }

  if (action.type === "STORE_NAME_RESET") {
    return (cart1 = []);
  }

  if (action.type === "REMOVE") {
    return cart1.filter((product) => product?.id !== action.payload?.id);
  }
  if (action.type === "INCREASE") {
    let tempcart = cart1.map((product) => {
      if (product?.id === action.payload?.id) {
        // console.log('ABC', product)
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    let tempcart = cart1.map((product) => {
      if (product?.id === action.payload?.id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    return tempcart;
  }
  return cart1;
};
export default Reducer;
