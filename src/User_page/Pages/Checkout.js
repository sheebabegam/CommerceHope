import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Layouts/Navbar";
import { makeStyles } from "@material-ui/styles";
import { Paper, Button, Typography } from "@mui/material";
import Footer from "../Layouts/Footer";
import { useLocation } from "react-router-dom";

function Checkout(props) {
  const classes = useStyles();
  const location = useLocation();
  const loc_cartData = location.state.id;
  console.log("PROCEED Data", loc_cartData);

  var cart = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();

  var carts = localStorage.getItem("newCart", JSON.stringify("newCart"));
  var cart_details = JSON.parse(carts);

  console.log("NEEDED Cart", cart_details);
  return (
    <div className={classes.whole_div}>
      <Navbar />
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
                  ({cart_details.length} items)
                </span>
              </Typography>
            </div>
            <div>
              <table style={{ color: "white" }}>
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
                {cart_details.map((product, i) => (
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
                              src={product.prod_img}
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
                                {product.prod_name}
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
                      <td>${product.prod_price}.0</td>
                      <td>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Button>
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
                            <span style={{ fontSize: 15 }}>QTY</span>
                            <div>
                              <Button>
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
                      <td>${product.prod_price}.0</td>
                      <td>
                        <Button
                          onClick={() => {
                            dispatch({ type: "REMOVE", payload: product });
                          }}
                        >
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
          <div style={{ width: 400, backgroundColor: "pink" }}>
            <p>Checkout</p>
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
    margin: " 30px 0px 8px !important",
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
});
