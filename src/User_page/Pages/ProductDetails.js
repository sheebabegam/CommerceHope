import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../Layouts/Navbar";
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import star from "../assets/images/star.png";
import ColorRoundSidebar from "../components/ColorRoundSidebar";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { FormHelperText } from "@mui/material";
import ProductAddToCart from "../components/ProductAddToCart";
import ReactImageMagnify from "react-image-magnify";
import WarrentyCard from "../components/WarrentyCard";
import { Container } from "@mui/system";
import Description from "./Description";
import Reviews from "./Reviews";
import ProductCardRelated from "../components/ProductCardRelated";
import Footer from "../Layouts/Footer";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchProductsRequest, AddCart } from "../Redux/actions";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../Redux/actions";

function ProductDetails(props) {
  const classes = useStyles();
  const location = useLocation();
  const loc_data = location.state.id;
  console.log("LOCATION DATA", loc_data);
  // console.log("CARD details", props);

  const items = useSelector((state) => state._todoProduct);
  const dispatch = useDispatch();
  console.log(items);

  localStorage.setItem("items", JSON.stringify(items));

  const [age, setAge] = React.useState("");
  const [tab, setTab] = useState("description");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let RelatedProducts = props.RelatedProducts.map((card, i) => {
    return <ProductCardRelated card={card} key={i} />;
  });

  var cart = useSelector((state) => state.addToCart);

  console.log("redux cart", cart);

  var cart_local = localStorage.getItem("cart", JSON.stringify(cart));
  const [addCart, setAddCart] = useState([]);

  console.log("clear addCart data", addCart);

  const addcart = (loc_data, e) => {
    console.log("Before Add", addCart);
    console.log("LOCATION data", typeof loc_data);
    // addCart.push(loc_data);
    // setAddCart([...addCart]);
    console.log("update data", loc_data);
    console.log("pre data", addCart);
    setAddCart((prevData) => [...prevData, loc_data]);
    console.log("After Added", addCart);
    localStorage.setItem("cart", JSON.stringify([...addCart], e));
  };

  // useEffect(() => {
  //   var carts = localStorage.getItem("cart", JSON.stringify(cart));
  //   var cart_details = JSON.parse(carts);
  //   console.log(cart_details);
  // }, [cart]);
  return (
    <div className={classes.whole_div}>
      <div style={{ width: "60%", padding: "0px 390px" }}>
        <div>
          <div>
            <Typography
              variant="h3"
              className={classes.product_details_heading}
              style={{ fontWeight: 700 }}
            >
              Product Details
            </Typography>
          </div>
          <div className={classes.breadcrumb_div}>
            <p>Home &nbsp;</p>
            <span className="breadcrumb-arrow"> &gt; </span>
            <p
              className={classes.product_name_crumb}
              style={{ fontWeight: 400 }}
            >
              &nbsp; {loc_data.prod_name}
            </p>
          </div>
        </div>
        <div>
          <div>
            <div style={{ border: "1px solid rgba(145, 158, 171, 0.32)" }}>
              <Grid container spacing={2} style={{ padding: 10 }}>
                <Grid item xs={6}>
                  <div>
                    <img
                      src={loc_data.image}
                      alt="headphones"
                      className={classes.prod_img_div}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className={classes.side_div_prod_det}>
                    <div>
                      <span
                        className={classes.prod_det_span}
                        style={{ fontWeight: 700 }}
                      >
                        {loc_data.stock}
                      </span>
                      <p className={classes.prod_det_name}>{loc_data.name}</p>
                    </div>
                    <div className={classes.star_review_div}>
                      <div className={classes.star_flex_div}>
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img}
                        />

                        <p
                          className={classes.prod_det_review}
                          style={{ fontWeight: 400 }}
                        >
                          (4 reviews)
                        </p>
                      </div>
                    </div>
                    <div className={classes.price_flex_div}>
                      <h4 className={classes.prod_det_price_tag}>Price</h4>

                      <div>
                        <span className={classes.prod_det_strike_price}>
                          ${loc_data.prod_strike_price}.0
                        </span>
                        &nbsp;
                        <span
                          className={classes.prod_det_actual_price}
                          style={{ fontWeight: 700 }}
                        >
                          ${loc_data.price}.0
                        </span>
                      </div>
                    </div>
                    <hr className={classes.prod_det_line} />
                    <div className={classes.prod_det_padding_div}>
                      <div className={classes.color_colors_flex_div}>
                        <Typography
                          variant="h6"
                          className={classes.prod_color_name}
                        >
                          Color
                        </Typography>
                        <div>
                          <div className={classes.flex_color_div}>
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "aqua",
                                marginRight: 7,
                              }}
                            />
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "brown",
                                marginRight: 7,
                              }}
                            />
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "black",
                                marginRight: 7,
                              }}
                            />
                          </div>
                          <div className={classes.flex_color_div}>
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "grey",
                                marginRight: 7,
                              }}
                            />
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "white",
                                marginRight: 7,
                              }}
                            />
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "green",
                                marginRight: 7,
                              }}
                            />
                          </div>
                          <div className={classes.flex_color_div}>
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "transparent",
                                marginRight: 7,
                              }}
                            />
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "blue",
                                marginRight: 7,
                              }}
                            />
                            <ColorRoundSidebar
                              style={{
                                backgroundColor: "yellow",
                                marginRight: 7,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={classes.color_colors_flex_div}>
                        <div>
                          <Typography
                            variant="h6"
                            className={classes.prod_color_name}
                          >
                            Size
                          </Typography>
                        </div>
                        <div>
                          <FormControl
                            sx={{ m: 1, minWidth: 60 }}
                            className={classes.dropdown_size}
                          >
                            <Select
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                              style={{ color: "white" }}
                            >
                              <MenuItem value="">
                                <span style={{ fontSize: 20 }}>XS</span>
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                      <div
                        className={classes.color_colors_flex_div}
                        style={{ marginTop: 20 }}
                      >
                        <Typography
                          variant="h6"
                          className={classes.prod_color_name}
                        >
                          Quantity
                        </Typography>
                        <div>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              color: "white",
                              marginRight: "-10px",
                              "& > *": {
                                m: 1,
                              },
                            }}
                          >
                            <ButtonGroup
                              style={{
                                border: "1px solid rgba(145, 158, 171, 0.32)",
                              }}
                            >
                              <Button
                                style={{
                                  borderRadius: "50%",
                                  border: "1px solid transparent",
                                  color: "white",
                                }}
                                // onClick={() => dispatch(IncreaseQuantity(key))}
                              >
                                +
                              </Button>
                              <Button
                                style={{
                                  borderRadius: "50%",
                                  border: "1px solid transparent",
                                  color: "white",
                                  fontWeight: 400,
                                }}
                              >
                                2
                              </Button>
                              <Button
                                style={{
                                  borderRadius: "50%",
                                  border: "1px solid transparent",
                                  color: "white",
                                }}
                                // onClick={() => dispatch(DecreaseQuantity(key))}
                              >
                                -
                              </Button>
                            </ButtonGroup>
                            <FormHelperText
                              className={classes.helper_txt_prod_det}
                              style={{ fontWeight: 400 }}
                            >
                              Available: {loc_data.available_no}
                            </FormHelperText>
                          </Box>
                        </div>
                      </div>
                    </div>
                    <hr className={classes.prod_det_line} />
                    <div>
                      <Grid
                        container
                        spacing={2}
                        style={{ margin: "20px 0px" }}
                      >
                        <Grid item xs={6}>
                          <ProductAddToCart
                            className={classes.pro_det_cart_btn}
                            style={{
                              backgroundColor: "rgb(255, 193, 7)",
                              fontWeight: 700,
                              color: "rgb(33, 43, 54)",
                              fontSize: "0.9375rem",
                            }}
                            onClick={() => dispatch(AddCart(loc_data))}
                          >
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="ShoppingBasketRoundedIcon"
                              height={22}
                              width={22}
                              fill="rgb(33, 43, 54)"
                            >
                              <path d="M22 9h-4.79l-4.39-6.57c-.4-.59-1.27-.59-1.66 0L6.77 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1zM11.99 4.79 14.8 9H9.18l2.81-4.21zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
                            </svg>
                            &nbsp; Add To Cart
                          </ProductAddToCart>
                        </Grid>
                        <Grid item xs={6}>
                          <Link
                            to={{ pathname: "/commercehope/product-checkout" }}
                            state={{ id: loc_data }}
                            style={{ textDecoration: "none" }}
                          >
                            <ProductAddToCart
                              style={{
                                backgroundColor: "rgb(0, 125, 252)",
                                color: "white",
                                fontWeight: 700,
                                fontSize: "0.9375rem",
                              }}
                            >
                              Buy Now
                            </ProductAddToCart>
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div style={{ marginBottom: 30 }}>
                <div
                  className={classes.single_img_prod_det}
                  style={{ height: 80, width: 80, marginLeft: 270 }}
                >
                  <img
                    src="https://app.commercehope.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftechgater%2Fimage%2Fupload%2Fv1669211883%2Fmy-uploads%2Fhlrdgjqpljpkfyphrpgh.jpg&w=1920&q=75"
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.margin_warrenty_div}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className={classes.svg_main_div}>
                <div className={classes.svg_second_main_div}>
                  <div className={classes.svg_div_prod_det}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-13iuocw"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="VerifiedRoundedIcon"
                      fill="rgb(0, 125, 252)"
                      height={40}
                      width={40}
                    >
                      <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zM9.38 16.01 7 13.61a.9959.9959 0 0 1 0-1.41l.07-.07c.39-.39 1.03-.39 1.42 0l1.61 1.62 5.15-5.16c.39-.39 1.03-.39 1.42 0l.07.07c.39.39.39 1.02 0 1.41l-5.92 5.94c-.41.39-1.04.39-1.44 0z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="h6"
                    className={classes.original_txt_typo}
                  >
                    100% Original
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.svg_main_div}>
                <div className={classes.svg_second_main_div}>
                  <div className={classes.svg_div_prod_det}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-13iuocw"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="AccessTimeRoundedIcon"
                      fill="rgb(0, 125, 252)"
                      height={40}
                      width={40}
                    >
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="h6"
                    className={classes.original_txt_typo}
                  >
                    10 Day Replacement
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.svg_main_div}>
                <div className={classes.svg_second_main_div}>
                  <div className={classes.svg_div_prod_det}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-13iuocw"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="VerifiedUserRoundedIcon"
                      fill="rgb(0, 125, 252)"
                      height={40}
                      width={40}
                    >
                      <path d="m11.19 1.36-7 3.11C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11c-.51-.23-1.11-.23-1.62 0zm-1.9 14.93L6.7 13.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l5.88-5.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-6.59 6.59c-.38.39-1.02.39-1.41 0z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <Typography
                    variant="h6"
                    className={classes.original_txt_typo}
                  >
                    1 Year Warranty
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div style={{ margin: "50px 0px" }}>
          <Container className={classes.border_tab_div}>
            <Button
              className={classes.tab_btn}
              onClick={() => setTab("description")}
              style={
                tab === "description"
                  ? { borderBottom: "3px solid rgb(0, 125, 252)" }
                  : { borderBottom: "none" }
              }
            >
              Description
            </Button>
            <Button
              className={classes.tab_btn}
              onClick={() => setTab("review")}
              style={
                tab === "review"
                  ? { borderBottom: "3px solid rgb(0, 125, 252)" }
                  : { borderBottom: "none" }
              }
            >
              Review
            </Button>
          </Container>
          <Container className={classes.border_tab_div1}>
            {tab === "description" && <Description />}
            {tab === "review" && <Reviews />}
          </Container>
        </div>
        <div>
          <Typography
            variant="h3"
            className={classes.related_prod_h3}
            style={{ fontWeight: 700 }}
          >
            Related Products
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            className={classes.grid_padding}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {RelatedProducts}
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;

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
  prod_img_div: {
    height: "600px",
    padding: "0px 20px 24px 0px",
    cursor: "zoom-in",
    width: "100%",
  },
  prod_det_span: {
    height: "22px",
    minWidth: "22px",
    lineHeight: 0,
    borderRadius: "8px",
    cursor: "default",
    alignItems: "center",
    whiteSpace: "nowrap",
    display: "inline-flex",
    justifyContent: "center",
    padding: "0px 8px",
    color: "rgb(255, 164, 141)",
    fontSize: "0.75rem",
    fontFamily: "Montserrat",
    backgroundColor: "rgba(255, 72, 66, 0.16)",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  side_div_prod_det: {
    padding: "0px 30px !important",
  },
  prod_det_name: {
    margin: "0px 0px 16px",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "2rem",
    fontFamily: "Montserrat",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    color: "white",
  },
  star_img: {
    height: "18px",
    width: "18px",
    marginRight: 3,
  },
  star_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  prod_det_review: {
    lineHeight: 1.57143,
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    fontWeight: 400,
    color: "rgb(145, 158, 171)",
    margin: "0px 0px 0px 4px",
  },
  price_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    margin: "-7px 0px !important",
  },
  prod_det_price_tag: {
    fontSize: "1.5rem",
  },
  prod_det_strike_price: {
    color: "rgb(99, 115, 129)",
    textDecoration: "line-through",
    fontSize: "16px",
  },
  prod_det_actual_price: {
    fontSize: "1.5rem",
  },
  prod_det_line: {
    margin: "0px",
    flexShrink: 0,
    borderWidth: " 0px 0px thin",
    borderStyle: "solid",
    borderColor: "rgba(145, 158, 171, 0.24)",
  },
  flex_color_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  color_colors_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  prod_color_name: {
    margin: "4px 0px 0px",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "1rem",
    fontFamily: "Montserrat",
    color: "white",
  },
  prod_det_padding_div: {
    padding: "30px 0px",
  },
  helper_txt_prod_det: {
    lineHeight: 1.5,
    fontSize: "0.625rem !important",
    fontFamily: "Montserrat !important",
    fontWeight: 400,
    color: "rgb(145, 158, 171) !important",
    display: "block !important",
    textAlign: "right !important",
    margin: 0,
    marginLeft: "50px !important",
  },
  dropdown_size: {
    color: "white",
    border: "1px solid rgba(145, 158, 171, 0.32) !important",
    padding: "0px !important",
    margin: "0px !important",
    borderRadius: "4px !important",
  },
  pro_det_cart_btn: {
    transition:
      "backgroundColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    color: "rgb(33, 43, 54) !important",
    backgroundColor: "rgb(255, 193, 7) !important",
    width: "100%",
    boxShadow: "rgb(255 193 7 / 24%) 0px 8px 16px 0px !important",
  },
  single_img_prod_det: {
    borderRadius: "6px",
    border: "3px solid rgb(0, 125, 252)",
    backgroundColor: "rgba(22, 28, 36, 0.48) !important",
  },
  svg_div_prod_det: {
    margin: "auto auto 24px",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: "64px",
    justifyContent: "center",
    height: "64px",
    color: "rgb(0, 125, 252)",
    backgroundColor: "rgba(0, 125, 252, 0.08)",
  },
  svg_main_div: {
    backgroundColor: "rgb(26, 33, 56)",
    color: " rgb(255, 255, 255)",
    boxShadow: "none",
    backgroundImage: "none",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24)",
    transition: "all 0.3s ease-in-out 0s",
    borderRadius: "8px",
    width: "100%",
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  svg_second_main_div: {
    margin: "16px auto",
    maxWidth: "280px",
    textAlign: "center",
  },
  original_txt_typo: {
    margin: "0px 0px 8px !important",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "1rem !important",
    fontFamily: "Montserrat !important",
    textAlign: "center",
  },
  margin_warrenty_div: {
    marginTop: 100,
  },
  prod_det_tab_main_div: {
    backgroundColor: "rgb(26, 33, 56)",
    color: "rgb(255, 255, 255)",
    borderRadius: "4px",
    boxShadow: "none",
    backgroundImage: "none",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24)",
    transition: "all 0.3s ease-in-out 0s",
  },
  tab_btn: {
    color: "white !important",
    textTransform: "capitalize !important",
    fontSize: "18px !important",
    padding: "15px !important",
  },
  border_tab_div: {
    border: "1px solid rgba(145, 158, 171, 0.24)",
  },
  border_tab_div1: {
    border: "1px solid rgba(145, 158, 171, 0.24)",
  },
  related_prod_h3: {
    // margin: "64px 0px 24px",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "2.2rem !important",
    fontFamily: "Montserrat",
    color: "rgb(255, 255, 255)",
    textAlign: "center",
    margin: "64px 24px !important",
  },

  // average_rating: {
  //   margin: "0px 0px 8px",
  //   fontWeight: 600,
  //   lineHeight: 1.5,
  //   fontSize: "1rem",
  //   fontFamily: "Montserrat",
  //   color: "white",
  // },
  // rating_no: {
  //   margin: "0px 0px 8px",
  //   fontWeight: 600,
  //   lineHeight: 1.5,
  //   fontSize: "1rem",
  //   fontFamily: "Montserrat",
  //   color: "red",
  // },
  // reviews_prod: {
  //   margin: "0px",
  //   lineHeight: 1.57143,
  //   fontFamily: "Montserrat",
  //   fontSize: "0.75rem",
  //   fontWeight: 400,
  //   color: "rgb(145, 158, 171)",
  // },
  // flex_div: {
  //   textAlign: "center",
  //   borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
  // },
  // star_flex_div1: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // write_review_btn: {
  //   display: "inline-flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   position: "relative",
  //   boxSizing: "border-box",
  //   backgroundColor: "transparent",
  //   outline: "0px",
  //   margin: "0px",
  //   cursor: "pointer",
  //   userSelect: "none",
  //   verticalAlign: "middle",
  //   appearance: "none",
  //   textDecoration: "none",
  //   fontWeight: 700,
  //   lineHeight: "1.71429 !important",
  //   fontSize: "0.9375rem !important",
  //   textTransform: "capitalize !important",
  //   fontFamily: "Montserrat !important",
  //   minWidth: "64px !important",
  //   padding: "7px 21px !important",
  //   borderRadius: "4px !important",
  //   transition:
  //     "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  //   border: "1px solid rgba(0, 125, 252, 0.5) !important",
  //   color: "rgb(0, 125, 252) !important",
  //   height: "48px !important",
  // },
  // review_btn_div: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // reviewer_user_icon_div: {
  //   position: "relative",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   flexShrink: 0,
  //   fontFamily: "Montserrat",
  //   fontSize: "1.25rem",
  //   lineHeight: 1,
  //   borderRadius: "50%",
  //   overflow: "hidden",
  //   userSelect: "none",
  //   color: "rgb(26, 33, 56)",
  //   backgroundColor: "rgb(99, 115, 129)",
  //   width: "64px",
  //   height: "64px",
  // },
  // reviewer_img: {
  //   height: 64,
  //   width: 64,
  //   borderRadius: "50%",
  // },
  // star_img1: {
  //   height: "14px",
  //   width: "14px",
  //   marginRight: 3,
  // },
  // november_para: {
  //   margin: "0px",
  //   lineHeight: 1.5,
  //   fontSize: "0.625rem",
  //   fontFamily: "Montserrat",
  //   fontWeight: 400,
  //   overflow: "hidden",
  //   textOverflow: "ellipsis",
  //   whiteSpace: "nowrap",
  //   color: "rgb(145, 158, 171)",
  //   float: "right",
  // },
  // name_typo: {
  //   margin: "0px !important",
  //   fontWeight: 600,
  //   lineHeight: 1.5,
  //   fontSize: "1rem !important",
  //   fontFamily: "Montserrat !important",
  //   overflow: "hidden",
  //   textOverflow: "ellipsis",
  //   whiteSpace: "nowrap",
  //   color: "white",
  // },
  // great_typo: {
  //   margin: "4px 0px 8px !important",
  //   lineHeight: 1.57143,
  //   fontSize: "0.875rem !important",
  //   fontFamily: "Montserrat !important",
  //   fontWeight: 400,
  //   color: "white",
  // },
  // review_bag: {
  //   height: "90px",
  //   width: "100px",
  //   borderRadius: "8px",
  // },
  // review_first_div: {
  //   borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
  // },
  // reviewbag_div: {
  //   marginBottom: 30,
  // },
});

// **************************************************************************

// import React, { Component, useEffect } from "react";
// import { actFetchProductsRequest, AddCart } from "../Redux/actions";
// import { connect, useDispatch, useSelector } from "react-redux";

// export default function Product() {
//   const items = useSelector((state) => state._todoProduct);
//   const dispatch = useDispatch();
//   console.log(items);

//   // useEffect(()=> {
//   //   dispatch(actFetchProductsRequest())
//   // },[])
//   return (
//     <div className="row" style={{ marginTop: "10px" }}>
//       <div className="col-md-12">
//         <div className="row">
//           {items._products.map((item, index) => (
//             <div
//               key={index}
//               className="col-md-2"
//               style={{ marginBottom: "10px" }}
//             >
//               <img
//                 src={item.image}
//                 className="img-resposive"
//                 style={{ width: "100%", height: "100px" }}
//               />
//               <h5>{item.name}</h5>
//               <span
//                 className="badge badge-primary"
//                 style={{ cursor: "pointer" }}
//                 // onClick={() => dispatch(IncreaseQuantity(key))}
//                 onClick={() => dispatch(AddCart(item))}
//               >
//                 Add Cart
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
