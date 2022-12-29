import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { makeStyles } from "@material-ui/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import star from "../assets/images/star.png";
import Box from "@mui/material/Box";
import ProductCheckBox from "../components/ProductCheckBox";
import ColorRoundSidebar from "../components/ColorRoundSidebar";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ProductCardList(props) {
  const classes = useStyles();
  console.log("PPPPP", props);

  const {
    prod_img,
    stock,
    prod_name,
    prod_star,
    prod_strike_price,
    prod_price,
  } = props.card;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid rgba(145, 158, 171, 0.24)",
          marginLeft: 15,
          marginTop: 15,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div
              className={classes.prod_back_img}
              style={{ backgroundImage: `url(${prod_img})` }}
            >
              <span
                style={{
                  fontWeight: 700,
                }}
                className={classes.stock_span}
              >
                {stock}
              </span>
            </div>
          </Grid>
          <Grid item xs={9} style={{ color: "white" }}>
            <div style={{ padding: "16px 13px", marginLeft: "-25px" }}>
              <Typography
                variant="h3"
                className={classes.list_view_prod_name_typo}
                style={{ fontWeight: 700, paddingBottom: 10 }}
              >
                {prod_name}
              </Typography>
              <span
                className={classes.list_view_span}
                style={{ fontWeight: 400 }}
              >
                USB port :The external USB port allows you to charge your phone
                at anywhere and anytime octopus phone sucker design can hold
                your phone firmly and free your hand.B
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
                    <span>{prod_star}</span>
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
                  ${prod_strike_price}.0
                </Typography>{" "}
                &nbsp; &nbsp;
                <p
                  style={{ fontWeight: 600 }}
                  className={classes.list_view_actual_price}
                >
                  ${prod_price}.0
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
    </>
  );
}

export default ProductCardList;

const useStyles = makeStyles((theme) => ({
  prod_back_img: {
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
}));
