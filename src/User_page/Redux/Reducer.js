// const Reducer = (cart = [], action) => {
//   console.log("Mycart is", cart);

//   var cart1 = JSON.parse(localStorage.getItem("cart"));

//   // if(cart == null){
//   //   var cart1 = JSON.parse(localStorage.getItem('cart'));
//   // } else if(cart){
//   //   console.log('CARTSSSSS',cart)
//   //   var cart1 = []
//   // }

//   if (action.type === "ADD") {
//     let tempcart = cart1.filter(
//       (product) => product?.menu_id === action.payload.menu_id
//     );
//     console.log("TEMP cart is", tempcart);
//     if (tempcart < 1) {
//       return [...cart, action.payload];
//     } else {
//       return cart1;
//     }
//   }

//   if (action.type === "STORE_NAME_RESET") {
//     return (cart1 = []);
//   }

//   if (action.type === "REMOVE") {
//     return cart1.filter(
//       (product) => product?.menu_id !== action.payload?.menu_id
//     );
//   }
//   if (action.type === "INCREASE") {
//     let tempcart = cart1.map((product) => {
//       if (product?.menu_id === action.payload?.menu_id) {
//         // console.log('ABC', product)
//         return { ...product, quantity: product.quantity + 1 };
//       }
//       return product;
//     });
//     return tempcart;
//   }
//   if (action.type === "DECREASE") {
//     let tempcart = cart1.map((product) => {
//       if (product?.menu_id === action.payload?.menu_id) {
//         return { ...product, quantity: product.quantity - 1 };
//       }
//       return product;
//     });
//     return tempcart;
//   }
//   return cart1;
// };
// export default Reducer;

import { combineReducers } from "redux";
import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from "./actions";

import ProductData from "../assets/JSON_data/All_category.json";

// const ProductData = [
//   {
//     id: 1,
//     name: "product 1",
//     price: 44,
//   },
//   { id: 2, name: "product  2", price: 44 },
// ];
const initProduct = {
  numberCart: 0,
  Carts: [],
  _products: ProductData,
};

function todoProduct(state = initProduct, action) {
  // console.log(Carts)
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        _products: action.payload,
      };
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberCart == 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.id == action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id !== state.Carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
}
const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;
