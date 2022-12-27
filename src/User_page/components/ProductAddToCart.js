import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import { style } from "@mui/system";

function ProductAddToCart(props) {
  const classes = useStyles();
  const { children, onClick, style } = props;
  return (
    <Button
      className={classes.prod_det_add_to_cart_btn}
      onClick={onClick}
      style={style}
    >
      {children}
    </Button>
  );
}

export default ProductAddToCart;

const useStyles = makeStyles({
  prod_det_add_to_cart_btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    outline: "0px",
    border: "0px",
    margin: "0px",
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    textDecoration: "none",
    fontWeight: 700,
    lineHeight: 1.71429,
    fontSize: "0.9375rem",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat",
    minWidth: "64px",
    padding: "8px 22px",
    borderRadius: "4px",
    // transition:
    //   "backgroundColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    // color: "rgb(33, 43, 54) !important",
    // backgroundColor: "rgb(255, 193, 7) !important",
    width: "100%",
    // boxShadow: "rgb(255 193 7 / 24%) 0px 8px 16px 0px !important",
    height: "48px !important",
    whiteSpace: "nowrap",
  },
});
