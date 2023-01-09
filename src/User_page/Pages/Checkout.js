import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaidIcon from "@mui/icons-material/Paid";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Box from "@mui/material/Box";
import "./style.css";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import CountryNames from "../assets/JSON_data/CountryNames.json";

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

  var cart_local = localStorage.getItem("items", JSON.stringify(items));
  var carts = JSON.parse(cart_local);
  console.log("Local Cart is", carts.Carts);

  // ----------------------------------------------

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = steps.length;
  const completedSteps = Object.keys(completed).length;
  const allStepsCompleted = completedSteps === totalSteps;

  const handlesBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  // ------------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [checkState, setCheckState] = useState("notChecked");

  const handleBeforeCheck = () => {
    setCheckState("notChecked");
  };

  const handleAfterCheck = () => {
    handleNext();
    setCheckState("checked");
  };

  const handleCartBack = () => {
    setCheckState("notChecked");
  };

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
              <span className="breadcrumb-arrow"> &gt; </span> &nbsp;
              <p
                className={classes.product_name_crumb}
                style={{ fontWeight: 400 }}
              >
                Checkout
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: 40 }}>
          <Stack
            sx={{ width: "60%", color: "white", padding: "0px 370px" }}
            spacing={4}
          >
            <Stepper
              style={{ color: "white" }}
              alternativeLabel
              activeStep={0}
              connector={<ColorlibConnector />}
            >
              {steps.map((label, index) => (
                <Step
                  key={label}
                  completed={completed[index]}
                  style={{ color: "white" }}
                >
                  <StepLabel
                    StepIconComponent={ColorlibStepIcon}
                    sx={{ color: "white" }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div>
              <div style={{ width: 707 }} className={classes.margin_line}>
                {checkState === "notChecked" && (
                  <div>
                    <div>
                      <Typography
                        variant="h4"
                        style={{
                          color: "white",
                          fontSize: 25,
                          margin: "20px 20px",
                        }}
                      >
                        Cart{" "}
                        <span style={{ fontSize: 15, color: "gray" }}>
                          ({items.numberCart} items)
                        </span>
                      </Typography>
                    </div>
                    <div>
                      <div>
                        {carts.Carts.length === 0 && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <svg
                              class="MuiBox-root css-d8vlf1"
                              viewBox="0 0 1080 720"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              height={350}
                              width={350}
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M553.133 23.8597C661.054 16.5795 781.47 -32.6146 865.043 36.0539C951.428 107.032 953.696 236.327 947.588 347.964C941.866 452.541 908.95 555.733 832.68 627.511C758.441 697.379 654.898 725.265 553.133 719.191C457.333 713.473 377.198 659.336 305.075 596.022C226.047 526.646 135.188 453.007 130.258 347.964C125.202 240.234 195.047 141.083 280.646 75.4767C356.922 17.0165 457.249 30.328 553.133 23.8597Z"
                                fill="#2C354E"
                              ></path>
                              <path
                                d="M797.574 249.254H381.776C358.007 249.254 340.383 271.314 345.632 294.496L391.334 496.349C395.158 513.235 410.164 525.224 427.478 525.224H751.871C769.185 525.224 784.191 513.235 788.015 496.349L833.718 294.496C838.966 271.314 821.343 249.254 797.574 249.254Z"
                                fill="#007DFC"
                                stroke="black"
                                stroke-width="0.788486"
                              ></path>
                              <rect
                                x="325.926"
                                y="227.176"
                                width="529.074"
                                height="54.4055"
                                rx="6.30788"
                                fill="url(#paint0_linear_6_2488)"
                              ></rect>
                              <rect
                                x="565.626"
                                y="116"
                                width="39.4243"
                                height="147.447"
                                rx="6.30788"
                                fill="#919EAB"
                              ></rect>
                              <circle
                                cx="585.338"
                                cy="239.004"
                                r="10.2503"
                                fill="#fff"
                              ></circle>
                              <rect
                                x="451.295"
                                y="309.967"
                                width="38.6358"
                                height="153.755"
                                rx="15.7697"
                                fill="#2C354E"
                              ></rect>
                              <rect
                                x="526.201"
                                y="309.967"
                                width="38.6358"
                                height="153.755"
                                rx="15.7697"
                                fill="#2C354E"
                              ></rect>
                              <rect
                                x="601.896"
                                y="309.967"
                                width="38.6358"
                                height="153.755"
                                rx="15.7697"
                                fill="#2C354E"
                              ></rect>
                              <rect
                                x="676.802"
                                y="309.967"
                                width="38.6358"
                                height="153.755"
                                rx="15.7697"
                                fill="#2C354E"
                              ></rect>
                              <circle
                                cx="303.849"
                                cy="227.176"
                                r="78.8486"
                                fill="url(#paint2_linear_6_2488)"
                              ></circle>
                              <path
                                d="M302.82 218.434C299.927 218.434 297.337 217.728 295.049 216.315C292.761 214.868 290.962 212.782 289.649 210.057C288.337 207.332 287.681 204.035 287.681 200.166C287.681 196.298 288.337 193.001 289.649 190.276C290.962 187.551 292.761 185.482 295.049 184.069C297.337 182.622 299.927 181.899 302.82 181.899C305.747 181.899 308.338 182.622 310.592 184.069C312.879 185.482 314.679 187.551 315.991 190.276C317.303 193.001 317.959 196.298 317.959 200.166C317.959 204.035 317.303 207.332 315.991 210.057C314.679 212.782 312.879 214.868 310.592 216.315C308.338 217.728 305.747 218.434 302.82 218.434ZM302.82 211.521C304.2 211.521 305.394 211.134 306.403 210.36C307.446 209.586 308.254 208.358 308.825 206.676C309.431 204.994 309.734 202.824 309.734 200.166C309.734 197.509 309.431 195.339 308.825 193.657C308.254 191.975 307.446 190.747 306.403 189.973C305.394 189.199 304.2 188.812 302.82 188.812C301.475 188.812 300.28 189.199 299.237 189.973C298.228 190.747 297.421 191.975 296.815 193.657C296.243 195.339 295.957 197.509 295.957 200.166C295.957 202.824 296.243 204.994 296.815 206.676C297.421 208.358 298.228 209.586 299.237 210.36C300.28 211.134 301.475 211.521 302.82 211.521Z"
                                fill="white"
                              ></path>
                              <path
                                d="M258.104 263.388V236.895H264.235V263.388H258.104ZM276.01 263.388V241.891H267.532V236.895H290.619V241.891H282.142V263.388H276.01ZM299.558 247.568H312.312V252.337H299.558V247.568ZM300.012 258.468H314.432V263.388H293.918V236.895H313.939V241.815H300.012V258.468ZM319.31 263.388V236.895H324.382L335.66 255.591H332.973L344.062 236.895H349.096L349.171 263.388H343.419L343.381 245.713H344.441L335.584 260.587H332.821L323.776 245.713H325.063V263.388H319.31Z"
                                fill="white"
                              ></path>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_6_2488"
                                  x1="325.926"
                                  y1="254.379"
                                  x2="855"
                                  y2="254.379"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#BBD2C5"></stop>
                                  <stop stop-color="#292E49"></stop>
                                  <stop
                                    offset="0.5"
                                    stop-color="#536976"
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_6_2488"
                                  x1="565.626"
                                  y1="189.723"
                                  x2="605.05"
                                  y2="189.723"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#4CA1AF"></stop>
                                  <stop offset="1" stop-color="#C4E0E5"></stop>
                                </linearGradient>
                                <linearGradient
                                  id="paint2_linear_6_2488"
                                  x1="225"
                                  y1="227.176"
                                  x2="382.697"
                                  y2="227.176"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#E65C00"></stop>
                                  <stop offset="1" stop-color="#F9D423"></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        )}
                        {carts.Carts.length !== 0 && (
                          <table
                            style={{
                              color: "white",
                              borderCollapse: "collapse",
                            }}
                            className={classes.subtotal_div}
                            id="table_checkout"
                          >
                            <thead
                              style={{
                                background:
                                  "linear-gradient(to right bottom, rgb(0, 125, 252), rgb(1, 71, 140) 120%)",
                                color: "white",
                                height: 50,
                                fontSize: 12,
                                textAlign: "left",
                              }}
                            >
                              <tr>
                                <th style={{ paddingLeft: 20 }}>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th></th>
                              </tr>
                            </thead>
                            {ListCart.map((item, key) => (
                              <tbody key={key}>
                                <tr style={{ padding: "20px 0px" }} key={key}>
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
                                          style={{
                                            height: 64,
                                            width: 64,
                                            borderRadius: 6,
                                            marginLeft: 20,
                                          }}
                                        />
                                      </div>
                                      <div style={{ marginLeft: 10 }}>
                                        <div>
                                          <Typography
                                            variant="h6"
                                            className={
                                              classes.product_name_typo
                                            }
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
                                          <hr className={classes.hr_line} />{" "}
                                          &nbsp;
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
                                          borderRadius: 4,
                                          border:
                                            "1px solid rgba(145, 158, 171, 0.32)",
                                        }}
                                      >
                                        <Button
                                          onClick={() =>
                                            dispatch(DecreaseQuantity(key))
                                          }
                                          style={{ padding: 0, margin: 0 }}
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
                                            onClick={() =>
                                              dispatch(IncreaseQuantity(key))
                                            }
                                            style={{ padding: 0, margin: 0 }}
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
                                              style={{ padding: 0, margin: 0 }}
                                            >
                                              <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                                            </svg>
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    ${TotalPrice(item.price, item.quantity)}.0
                                  </td>
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
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {checkState === "checked" && (
                  <div>
                    {checkState === "checked" && (
                      <div
                        style={{ width: 707 }}
                        className={classes.margin_line}
                      >
                        <form className={classes.form} style={{ padding: 20 }}>
                          {/* onSubmit={handleSubmit(mySubmit)} */}
                          <div>
                            <Typography variant="h4">
                              Guest Information
                            </Typography>
                          </div>
                          <div>
                            <div className={classes.flex_reg_div}>
                              <CssTextField
                                className={classes.fields}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="firstname"
                                label="First Name"
                                name="firstname"
                                multiline
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{
                                  style: {
                                    color: "white",
                                  },
                                }}
                                {...register("firstname", {
                                  required: "First Name is required",
                                })}
                              />
                              {errors.firstname && (
                                <small className={classes.small_txt}>
                                  {errors.firstname.message}
                                </small>
                              )}
                              &nbsp; &nbsp; &nbsp;
                              <CssTextField
                                className={classes.fields}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="lastname"
                                label="Last Name"
                                name="lastname"
                                multiline
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{
                                  style: {
                                    color: "white",
                                  },
                                }}
                                {...register("lastname", {
                                  required: "Last Name is required",
                                })}
                              />
                              {errors.lastname && (
                                <small className={classes.small_txt}>
                                  {errors.lastname.message}
                                </small>
                              )}
                            </div>

                            <div className={classes.flex_reg_div}>
                              <CssTextField
                                className={classes.fields}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                multiline
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{
                                  style: {
                                    color: "white",
                                  },
                                }}
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value:
                                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i,
                                    message: "This is not a valid email",
                                  },
                                })}
                              />
                              {errors.email && (
                                <small className={classes.small_txt}>
                                  {errors.email.message}
                                </small>
                              )}
                              &nbsp; &nbsp; &nbsp;
                              <CssTextField
                                className={classes.fields}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                label="Phone"
                                name="phone"
                                multiline
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{
                                  style: {
                                    color: "white",
                                  },
                                }}
                                {...register("phone", {
                                  required: "Phone number is required",
                                })}
                              />
                              {errors.phone && (
                                <small className={classes.small_txt}>
                                  {errors.phone.message}
                                </small>
                              )}
                            </div>

                            <div className={classes.flex_reg_div}>
                              <CssTextField
                                className={classes.fields}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                multiline
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{
                                  style: {
                                    color: "white",
                                  },
                                }}
                                {...register("address", {
                                  required: "Address is required",
                                })}
                              />
                              {errors.address && (
                                <small className={classes.small_txt}>
                                  {errors.firstname.message}
                                </small>
                              )}
                            </div>

                            <div className={classes.flex_reg_div}>
                              <CssTextField
                                className={classes.fields}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="town"
                                label="Town/City"
                                name="town"
                                multiline
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{
                                  style: {
                                    color: "white",
                                  },
                                }}
                                {...register("town", {
                                  required: "Town/City is required",
                                })}
                              />
                              {errors.town && (
                                <small className={classes.small_txt}>
                                  {errors.town.message}
                                </small>
                              )}
                              &nbsp; &nbsp; &nbsp;
                              <CssTextField
                                className={classes.fields}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="state"
                                label="State"
                                name="state"
                                multiline
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{
                                  style: {
                                    color: "white",
                                  },
                                }}
                                {...register("state", {
                                  required: "State is required",
                                })}
                              />
                              {errors.state && (
                                <small className={classes.small_txt}>
                                  {errors.state.message}
                                </small>
                              )}
                              &nbsp; &nbsp; &nbsp;
                              <CssTextField
                                className={classes.fields}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="zip"
                                label="Zip/Postal Code"
                                name="zip"
                                multiline
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{
                                  style: {
                                    color: "white",
                                  },
                                }}
                                {...register("zip", {
                                  required: "Last Name is required",
                                })}
                              />
                              {errors.zip && (
                                <small className={classes.small_txt}>
                                  {errors.zip.message}
                                </small>
                              )}
                            </div>

                            <div className={classes.flex_reg_div}>
                              <select
                                {...register("country", {
                                  required: "Please select country",
                                })}
                                className={classes.select_option}
                                label="Country"
                              >
                                {CountryNames.map((name, i) => (
                                  <option value={name.country}>
                                    {name.country}
                                  </option>
                                ))}
                              </select>
                              {errors.country && (
                                <small className={classes.small_txt}>
                                  {errors.country.message}
                                </small>
                              )}
                            </div>
                            <br />

                            <div>
                              {/* style={{ marginBottom: 20 }} */}
                              <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                data-toggle="modal"
                              >
                                Deliver to this Address
                              </Button>
                            </div>
                            <br />
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {checkState === "notChecked" && (
                <div>
                  <Link to="/commercehope" style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        color: "white",
                        textTransform: "Capitalize",
                        fontWeight: 700,
                      }}
                    >
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ArrowBackRoundedIcon"
                        fill="white"
                        height={15}
                        weight={15}
                      >
                        <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.9959.9959 0 0 0-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
                      </svg>{" "}
                      &nbsp; Continue Shopping
                    </Button>

                    {/* <Button style={{ color: "white" }} onClick={handlesBack}>
                  Back
                </Button> */}
                  </Link>
                </div>
              )}
              {checkState === "checked" && (
                <Button
                  style={{ color: "white", textDecoration: "capitalize" }}
                  onClick={handleCartBack}
                >
                  Back
                </Button>
              )}
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
            <div
              className={classes.checkout_btn_div}
              style={
                checkState === "notChecked"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <AddToCartBtn
                className={classes.checkout_btn}
                onClick={handleAfterCheck}
              >
                Checkout
              </AddToCartBtn>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- */}

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
    maxWidth: "300px !important",
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
  flex_reg_div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  margin_line: {
    width: "707px !important",
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
    marginRight: "60px !important",
  },
  select_option: {
    width: "100% !important",
    height: "56px !important",
    backgroundColor: "#1A2138 !important",
    borderRadius: "4px !important",
    color: "white !important",
    fontSize: "1rem !important",
    marginTop: "-6px !important",
  },
  "& .css-1mr67r1": {
    backgroundColor: "rgb(69, 79, 91) !important",
  },
  "& .css-u8eh2j-MuiStepConnector-root .MuiStepConnector-line": {
    backgroundColor: "rgb(69, 79, 91) !important",
  },
  "& span.MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel.css-1hv8oq8-MuiStepLabel-label":
    {
      color: "white !important",
    },
});

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ShoppingBasketIcon />,
    2: <ReceiptIcon />,
    3: <PaidIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["Cart", "Billing & Address", "Payment"];

const stepDescription = ["Description 1", "Description 2", "Description 3"];

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#9c9a9a",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#9c9a9a",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9c9a9a",
    },
    "&:hover fieldset": {
      borderColor: "pink",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9c9a9a",
    },
  },
  fontFamily: "Montserrat !important",
  height: "70px !important",
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
