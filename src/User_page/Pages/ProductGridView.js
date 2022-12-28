import React from "react";
import Navbar from "../Layouts/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ProductCheckBox from "../components/ProductCheckBox";
import { makeStyles } from "@material-ui/styles";
import ColorRoundSidebar from "../components/ColorRoundSidebar";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductCardList from "../components/ProductCardList";
import All_data from "../assets/JSON_data/All_data.json";
import "./style.css";

function ProductGridView(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(props);

  return (
    <div>
      <Navbar />
      <div className={classes.whole_div} style={{ padding: "18px 200px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className={classes.sidebar_prod_page_div}>
                <div className={classes.padding_div}>
                  <div className={classes.typo_prod_page_div}>
                    <Typography
                      variant="h5"
                      className={classes.prod_page_filter_h5}
                      style={{ fontWeight: 700 }}
                    >
                      Filter
                    </Typography>
                  </div>
                  <div className={classes.padding_list_prod_page_div}>
                    <div className={classes.gen_res_flex_div}>
                      <p className={classes.gender}>Gender</p>
                      <Button>Reset</Button>
                    </div>
                    <div>
                      <ProductCheckBox label="Men"></ProductCheckBox>
                      <ProductCheckBox label="Women"></ProductCheckBox>
                      <ProductCheckBox label="Kids"></ProductCheckBox>
                      <ProductCheckBox label="Others"></ProductCheckBox>
                    </div>
                  </div>

                  <div className={classes.color_main_div}>
                    <p>Color</p>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <span className={classes.prod_page_span_round_div}>
                            <ColorRoundSidebar
                              style={{ backgroundColor: "aqua" }}
                            >
                              <span>Aqua</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "blue" }}
                            >
                              <span>Blue</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "gold" }}
                            >
                              <span>Gold</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "green" }}
                            >
                              <span>Green</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "yellow" }}
                            >
                              <span>Yellow</span>
                            </ColorRoundSidebar>
                          </span>
                        </Grid>
                        <Grid item xs={6}>
                          <span className={classes.prod_page_span_round_div}>
                            <ColorRoundSidebar
                              style={{ backgroundColor: "brown" }}
                            >
                              <span>Brown</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "grey" }}
                            >
                              <span>Grey</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "white" }}
                            >
                              <span>White</span>
                            </ColorRoundSidebar>
                          </span>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>

                  <div className={classes.color_main_div}>
                    <p>Size</p>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <ProductCheckBox label="XS"></ProductCheckBox>
                          <ProductCheckBox label="LG"></ProductCheckBox>
                          <ProductCheckBox label="XXL"></ProductCheckBox>
                        </Grid>
                        <Grid item xs={6}>
                          <ProductCheckBox label="SM"></ProductCheckBox>
                          <ProductCheckBox label="XL"></ProductCheckBox>
                          <ProductCheckBox label="Free"></ProductCheckBox>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>

                  <div className={classes.color_main_div}>
                    <p>Price Range</p>
                    <div>
                      <Box sx={{ width: 300 }}>
                        <Box sx={{ m: 3 }} />
                        <AirbnbSlider
                          slots={{ thumb: AirbnbThumbComponent }}
                          getAriaLabel={(index) =>
                            index === 0 ? "Minimum price" : "Maximum price"
                          }
                          defaultValue={[0, 100]}
                        />
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={9}>
              <div>
                <div className={classes.heading_flex_div_main}>
                  <div>
                    <p>Showing 1-12 of 112 items</p>
                  </div>
                  <div className={classes.menu_flex_div}>
                    <div>
                      <Button className={classes.button_horiz}>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="TuneRoundedIcon"
                          fill="rgb(145, 158, 171)"
                          height="30px"
                          width="30px"
                        >
                          <path d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1zM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1zM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z"></path>
                        </svg>
                      </Button>
                    </div>
                    <div>
                      <Button>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ViewListRoundedIcon"
                          fill="rgb(145, 158, 171)"
                          height="30px"
                          width="30px"
                        >
                          <path d="M4 14h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0 5h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zM4 9h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm5 5h11c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0 5h11c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zM8 6v2c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1z"></path>
                        </svg>
                      </Button>
                    </div>
                    <div>
                      <FormControl
                        sx={{ m: 1, minWidth: 120 }}
                        style={{ color: "white" }}
                      >
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          style={{ color: "white" }}
                        >
                          <MenuItem value="">
                            <span style={{ fontSize: 20 }}>Top rated</span>
                          </MenuItem>
                          <MenuItem value={10}>Asceding</MenuItem>
                          <MenuItem value={20}>Deceding</MenuItem>
                          <MenuItem value={30}>Price, low - high</MenuItem>
                          <MenuItem value={30}>Price, low - high</MenuItem>
                          <MenuItem value={30}>Price, high - low</MenuItem>
                          <MenuItem value={30}>Oldest</MenuItem>
                          <MenuItem value={30}>Newest</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div style={{ border: "1px solid rgba(145, 158, 171, 0.24)" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <div className={classes.prod_back_img}>
                        <span
                          style={{
                            fontWeight: 700,
                          }}
                          className={classes.stock_span}
                        >
                          Out of stock
                        </span>
                      </div>
                    </Grid>
                    <Grid item xs={9} style={{ color: "white" }}>
                      <div
                        style={{ padding: "16px 13px", marginLeft: "-25px" }}
                      >
                        <Typography
                          variant="h3"
                          className={classes.list_view_prod_name_typo}
                          style={{ fontWeight: 700, paddingBottom: 10 }}
                        >
                          Heroic Knight Fashion Super Thin Slim Backpack
                          Men,Waterproof Casual Daily Backpack For Mac book{" "}
                        </Typography>
                        <span
                          className={classes.list_view_span}
                          style={{ fontWeight: 400 }}
                        >
                          USB port :The external USB port allows you to charge
                          your phone at anywhere and anytime octopus phone
                          sucker design can hold your phone firmly and free your
                          hand.B
                        </span>
                        <div>
                          <div className={classes.flex_div_div}>
                            <div className={classes.flex_div}>
                              <svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="StarRoundedIcon"
                                height={20}
                                width={20}
                                fill="rgb(255, 193, 7)"
                              >
                                <path d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
                              </svg>
                              <span>5.0</span>
                            </div>
                            <div className={classes.flex_div}>
                              <ColorRoundSidebar
                                style={{
                                  backgroundColor: "grey",
                                  marginRight: 10,
                                }}
                              />
                              <ColorRoundSidebar
                                style={{
                                  backgroundColor: "aqua",
                                  marginRight: 10,
                                }}
                              />
                              <ColorRoundSidebar
                                style={{
                                  backgroundColor: "black",
                                  marginRight: 10,
                                }}
                              />
                              <ColorRoundSidebar
                                style={{
                                  backgroundColor: "green",
                                  marginRight: 10,
                                }}
                              />
                              <ColorRoundSidebar
                                style={{
                                  backgroundColor: "brown",
                                  marginRight: 10,
                                }}
                              />
                              <ColorRoundSidebar
                                style={{
                                  backgroundColor: "yellow",
                                  marginRight: 10,
                                }}
                              />
                              <ColorRoundSidebar
                                style={{
                                  backgroundColor: "white",
                                  marginRight: 10,
                                }}
                              />
                              <ColorRoundSidebar
                                style={{
                                  backgroundColor: "blue",
                                  marginRight: 10,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className={classes.prod_list_price_div}>
                          <Typography
                            variant="h5"
                            className={classes.list_view_strike_price}
                            style={{ fontWeight: 700 }}
                          >
                            $30.0
                          </Typography>{" "}
                          &nbsp; &nbsp;
                          <p
                            style={{ fontWeight: 600 }}
                            className={classes.list_view_actual_price}
                          >
                            $27.0
                          </p>
                        </div>
                        <div className={classes.flex_dropdown_btn}>
                          <FormControl
                            sx={{ m: 1, minWidth: 120, padding: 0, margin: 0 }}
                            style={{
                              color: "white",
                              border: "1px solid rgb(99, 115, 129)",
                              padding: 0,
                              marginTop: "-10px",
                              borderRadius: 4,
                            }}
                          >
                            <Select
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                              style={{ color: "white", padding: 0, margin: 0 }}
                            >
                              <MenuItem value="">
                                <span
                                  style={{
                                    fontSize: 18,
                                    padding: 0,
                                    margin: 0,
                                  }}
                                >
                                  XS
                                </span>
                              </MenuItem>
                            </Select>
                          </FormControl>
                          <Button
                            className={classes.list_view_btn}
                            style={{ fontWeight: 700 }}
                          >
                            Add To Cart
                          </Button>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default ProductGridView;

const useStyles = makeStyles({
  whole_div: {
    backgroundColor: "#1A2138 !important",
  },
  padding_div: {
    // padding: 20,
  },
  gen_res_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sidebar_prod_page_div: {
    backgroundColor: "#1A2138",
    color: "#fff",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "4px",
    boxShadow: "none",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
    backgroundImage: "none",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24)",
    transition: "all ease-in-out 0.3s",
    maxWidth: "100%",
    position: "-webkit-sticky",
    position: "sticky",
    top: "81px",
    marginTop: "16px",
    marginBottom: "16px",
  },
  prod_page_filter_h5: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
    fontSize: "1.7rem !important",
  },
  padding_list_prod_page_div: {
    padding: 16,
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
  },
  gender: {
    fontSize: 20,
  },
  color_span1: {
    borderRadius: "50% !important",
    width: "21.6px !important",
    height: "21.6px !important",
    border: "2px solid rgb(26, 33, 56) !important",
    boxShadow: "rgb(0 0 0 / 24%) -1px 1px 2px inset !important",
    backgroundColor: "aqua !important",
  },
  color_main_div: {
    padding: "16px",
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
  },
  heading_flex_div_main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  menu_flex_div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button_horiz: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    outline: "0px",
    border: "0px",
    margin: "0px",
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    textDecoration: "none",
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: "1.5rem",
    padding: "8px",
    borderRadius: "50%",
    overflow: "visible",
    color: "rgb(145, 158, 171) !important",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
  prod_list_img: {
    // height: 300,
    width: 250,
  },
  prod_back_img: {
    backgroundImage:
      "url('https://app.commercehope.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftechgater%2Fimage%2Fupload%2Fv1669207662%2Fmy-uploads%2Fot6jath5w8rh3mezbuok.jpg&w=1920&q=75') ",
    width: 250,
    height: 250,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    objectFit: "cover",
    borderRadius: 4,
  },
  stock_span: {
    height: "22px !important",
    minWidth: "22px !important",
    lineHeight: 0,
    borderRadius: "8px !important",
    cursor: "default !important",
    alignItems: "center !important",
    whiteSpace: "nowrap !important",
    display: "inline-flex !important",
    justifyContent: "center",
    padding: "0px 8px",
    color: "rgb(255, 255, 255) !important",
    fontSize: "0.75rem",
    fontFamily: "Montserrat !important",
    backgroundColor: "rgb(255, 72, 66) !important",
    fontWeight: 700,
    marginTop: "16px",
    marginRight: "14px",
    zIndex: 9,
    textTransform: "uppercase !important",
    float: "right",
  },
  list_view_prod_name_typo: {
    margin: "0px",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "2rem !important",
    fontFamily: "Montserrat !important",
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",
    whiteSpace: "nowrap !important",
    cursor: "pointer !important",
    textTransform: "capitalize !important",
    pointerEvents: "none !important",
  },
  list_view_span: {
    margin: "4px 0px 0px !important",
    lineHeight: 1.57143,
    fontFamily: "Montserrat !important",
    fontSize: "0.75rem !important",
    fontWeight: 400,
    color: "rgb(145, 158, 171) !important",
    paddingBottom: "8px !important",
  },
  flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flex_div_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list_view_strike_price: {
    margin: "0px !important",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "1.125rem !important",
    fontFamily: "Montserrat !important",
    color: "rgb(99, 115, 129) !important",
    textDecoration: "line-through !important",
  },
  list_view_actual_price: {
    margin: "0px !important",
    lineHeight: 1.5,
    fontSize: "2rem !important",
    fontFamily: "Montserrat !important",
    color: "rgb(255, 255, 255) !important",
    fontWeight: 600,
    textDecoration: "none !important",
  },
  prod_list_price_div: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  list_view_btn: {
    display: "inline-flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    position: "relative !important",
    boxSizing: "border-box !important",
    outline: "0px !important",
    border: "0px !important",
    margin: "0px !important",
    cursor: "pointer !important",
    userSelect: "none !important",
    verticalAlign: "middle !important",
    appearance: "none !important",
    textDecoration: "none !important",
    fontWeight: 700,
    lineHeight: 1.71429,
    fontSize: "0.875rem !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    minWidth: "64px !important",
    padding: "6px 16px !important",
    borderRadius: "4px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: "rgb(255, 255, 255) !important",
    backgroundColor: "rgb(0, 125, 252) !important",
    width: "100% !important",
    boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
    maxWidth: "200px !important",
  },
  flex_dropdown_btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "rgb(0, 125, 252) !important",
  marginLeft: 8,
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 33,
    width: 33,
    backgroundColor: "#fff",
    border: "1px solid rgb(0, 125, 252) !important",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "rgb(0, 125, 252) !important",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

// {All_data.map((item, i) => (
//     <div
//       style={{
//         backgroundImage: `url(${item.prod_img})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <span>Sale Tag</span>
//     </div>
//   ))}
