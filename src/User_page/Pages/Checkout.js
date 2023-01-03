import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Layouts/Navbar";
import { makeStyles } from "@material-ui/styles";
import { Paper, Button, Typography } from "@mui/material";
import Footer from "../Layouts/Footer";
import { useLocation } from "react-router-dom";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../Redux/actions";
import AddToCartBtn from "../components/AddToCartBtn";

function Checkout(props) {
  const classes = useStyles();
  const location = useLocation();
  // const loc_cartData = location.state.id;
  // console.log("PROCEED Data", loc_cartData);

  const items = useSelector((state) => state._todoProduct);
  console.log(items);
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price, qty) {
    return Number(price * qty);
  }

  console.log("Total Amount", TotalCart);

  const TotalAmount = TotalCart + 5;

  const dispatch = useDispatch();
  return (
    <div className={classes.whole_div}>
      {/* <Navbar /> */}
      <div>
        <div style={{ width: "60%", padding: "0px 390px" }}>
          <div>
            <div>
              <Typography
                variant="h3"
                className={classes.product_details_heading}
                style={{ fontWeight: 700, marginRight: 30 }}
              >
                Checkout
              </Typography>
            </div>
            <div className={classes.breadcrumb_div}>
              <p>Home &nbsp;</p>
              <span className="breadcrumb-arrow"> &gt; </span>
              <p
                className={classes.product_name_crumb}
                style={{ fontWeight: 400 }}
              >
                Checkout
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ width: 800 }}>
            <div>
              <Typography
                variant="h4"
                style={{ color: "white", fontSize: 25, margin: "20px 0px" }}
              >
                Cart{" "}
                <span style={{ fontSize: 15, color: "gray" }}>
                  ({items.numberCart} items)
                </span>
              </Typography>
            </div>
            <div>
              <table
                style={{ color: "white" }}
                className={classes.subtotal_div}
              >
                <thead
                  style={{
                    background:
                      "linear-gradient(to right bottom, rgb(0, 125, 252), rgb(1, 71, 140) 120%)",
                    color: "white",
                    height: 50,
                  }}
                >
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                {ListCart.map((item, key) => (
                  <tbody>
                    <tr style={{ padding: "20px 0px" }}>
                      <td style={{ padding: "20px 0px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div>
                            <img
                              src={item.image}
                              alt=""
                              style={{ height: 64, width: 64, borderRadius: 6 }}
                            />
                          </div>
                          <div style={{ marginLeft: 10 }}>
                            <div>
                              <Typography
                                variant="h6"
                                className={classes.product_name_typo}
                              >
                                {item.name}
                              </Typography>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                              }}
                            >
                              <p style={{ fontSize: "0.75rem" }}>
                                <span className={classes.span_para}>
                                  Size:{" "}
                                </span>{" "}
                                XS
                              </p>
                              <hr className={classes.hr_line} /> &nbsp;
                              <p style={{ fontSize: "0.75rem" }}>
                                <span className={classes.span_para}>
                                  Color:
                                </span>{" "}
                                brown{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>${item.price}.0</td>
                      <td>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Button
                              onClick={() => dispatch(DecreaseQuantity(key))}
                            >
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-26dwcd"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="RemoveRoundedIcon"
                                height={15}
                                width={15}
                                fill="gray"
                              >
                                <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                              </svg>
                            </Button>
                            <span style={{ fontSize: 15 }}>
                              {item.quantity}
                            </span>
                            <div>
                              <Button
                                onClick={() => dispatch(IncreaseQuantity(key))}
                              >
                                <svg
                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-26dwcd"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="AddRoundedIcon"
                                  height={15}
                                  width={15}
                                  fill="gray"
                                >
                                  <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                                </svg>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>${TotalPrice(item.price, item.quantity)}.0</td>
                      <td>
                        <Button onClick={() => DeleteCart(key)}>
                          <svg
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="DeleteOutlineRoundedIcon"
                            height={25}
                            width={25}
                            fill="rgb(0, 125, 252)"
                          >
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"></path>
                          </svg>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div style={{ width: 350 }}>
            <div style={{ padding: 20 }} className={classes.subtotal_div}>
              <div>
                <Typography
                  variant="h6"
                  className={classes.checkout_heading}
                  style={{ fontWeight: 700, textAlign: "left" }}
                >
                  Order Summary
                </Typography>
              </div>
              <div className={classes.checkout_table_div}>
                <div className={classes.checkout_flex_row}>
                  <p
                    className={classes.subtotal_para}
                    style={{ fontWeight: 400, fontSize: "0.75rem" }}
                  >
                    Sub Total
                  </p>
                  <Typography
                    variant="h6"
                    className={classes.subtotal_num}
                    style={{ fontWeight: 600, fontSize: "0.875rem" }}
                  >
                    ${TotalCart}.0
                  </Typography>
                </div>
                <div className={classes.checkout_flex_row}>
                  <p
                    className={classes.subtotal_para}
                    style={{ fontWeight: 400, fontSize: "0.75rem" }}
                  >
                    Shipping
                  </p>
                  <Typography
                    variant="h6"
                    className={classes.subtotal_num}
                    style={{ fontWeight: 600, fontSize: "0.875rem" }}
                  >
                    ${5}.0
                  </Typography>
                </div>
                <hr />

                <div className={classes.checkout_flex_row}>
                  <p
                    className={classes.subtotal_para}
                    style={{ fontWeight: 400, fontSize: "0.75rem" }}
                  >
                    Total
                  </p>
                  <Typography
                    variant="h6"
                    className={classes.subtotal_num}
                    style={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "rgb(255, 72, 66)",
                    }}
                  >
                    ${TotalAmount}.0
                  </Typography>
                </div>
              </div>
            </div>
            <div className={classes.checkout_btn_div}>
              <AddToCartBtn className={classes.checkout_btn}>
                Checkout
              </AddToCartBtn>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;

const useStyles = makeStyles({
  whole_div: {
    backgroundColor: "#1A2138 !important",
  },
  product_details_heading: {
    padding: " 30px 0px 8px !important",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "2rem !important",
    fontFamily: "Montserrat !important",
    color: "white",
  },
  flex_div_details: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  breadcrumb_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
  },
  product_name_crumb: {
    margin: "0px",
    lineHeight: 1.57143,
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    fontWeight: 400,
    color: "rgb(99, 115, 129)",
    maxWidth: "260px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  product_name_typo: {
    margin: "0px 0px 4px !important",
    fontWeight: 600,
    lineHeight: 1.57143,
    fontSize: "0.875rem !important",
    fontFamily: "Montserrat !important",
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",
    whiteSpace: "nowrap !important",
    maxWidth: "240px !important",
  },
  span_para: {
    margin: "0px !important",
    lineGeight: 1.57143,
    fontFamily: "Montserrat !important",
    fontSize: "0.75rem !important",
    fontWeight: 400,
    color: "rgb(145, 158, 171) !important",
  },
  hr_line: {
    margin: "0px 0px 0px 8px !important",
    flexShrink: 0,
    borderWidth: "0px thin 0px 0px !important",
    borderStyle: "solid !important",
    borderColor: "rgba(145, 158, 171, 0.24) !important",
    height: "14px !important",
    alignSelf: "center !important",
  },
  subtotal_div: {
    backgroundColor: "rgb(26, 33, 56) !important",
    color: "rgb(255, 255, 255) !important",
    borderRadius: "4px !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    position: "relative !important",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    transition: "all 0.3s ease-in-out 0s !important",
    marginBottom: "24px !important",
  },
  checkout_heading: {
    margin: "0px !important",
    fontWeight: 700,
    lineHeight: 1.55556,
    fontSize: "1.5rem !important",
    fontFamily: "Montserrat !important",
    display: "block !important",
  },
  checkout_flex_row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

// **********************************************************************

// import React, { Component } from "react";
// import { connect, useDispatch, useSelector } from "react-redux";
// import {
//   IncreaseQuantity,
//   DecreaseQuantity,
//   DeleteCart,
// } from "../Redux/actions";

// function Checkout() {
//   //  console.log(items)
//   const items = useSelector((state) => state._todoProduct);
//   console.log(items);
//   let ListCart = [];
//   let TotalCart = 0;
//   Object.keys(items.Carts).forEach(function (item) {
//     TotalCart += items.Carts[item].quantity * items.Carts[item].price;
//     ListCart.push(items.Carts[item]);
//   });
//   function TotalPrice(price, tonggia) {
//     return Number(price * tonggia).toLocaleString("en-US");
//   }

//   const dispatch = useDispatch();
//   return (
//     <div className="row">
//       <div className="col-md-12">
//         <table className="table">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>Image</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {ListCart.map((item, key) => {
//               return (
//                 <tr key={key}>
//                   <td>
//                     <i
//                       className="badge badge-danger"
//                       onClick={() => DeleteCart(key)}
//                     >
//                       Delete
//                     </i>
//                   </td>
//                   <td>{item.name}</td>
//                   <td>
//                     <img
//                       src={item.image}
//                       style={{ width: "100px", height: "80px" }}
//                     />
//                   </td>
//                   <td>{item.price} $</td>
//                   <td>
//                     <span
//                       className="btn btn-primary"
//                       style={{ margin: "2px" }}
//                       onClick={() => dispatch(DecreaseQuantity(key))}
//                     >
//                       -
//                     </span>
//                     <span className="btn btn-info">{item.quantity}</span>
//                     <span
//                       className="btn btn-primary"
//                       style={{ margin: "2px" }}
//                       onClick={() => dispatch(IncreaseQuantity(key))}
//                     >
//                       +
//                     </span>
//                   </td>
//                   <td>{TotalPrice(item.price, item.quantity)} $</td>
//                 </tr>
//               );
//             })}
//             <tr>
//               <td colSpan="5">Total Carts</td>
//               <td>{Number(TotalCart).toLocaleString("en-US")} $</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Checkout;
