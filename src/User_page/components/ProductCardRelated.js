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

function Prod_Card(props) {
  const classes = useStyles();
  // console.log("PPPPP", props);

  const {
    prod_img,
    stock,
    prod_name,
    prod_star,
    prod_strike_price,
    prod_price,
  } = props.card;

  return (
    <>
      <Grid item xs={12} sm={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={prod_img} />
            <div className={classes.sale_tag_div}>
              <span className={classes.avail_tag_span}>{stock}</span>
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.prod_name}
                style={{ fontWeight: 600, marginTop: "-40px" }}
              >
                {prod_name}
              </Typography>
              <div className={classes.star_div}>
                <p className={classes.star_rate}>
                  {/* <img src={star} alt="star" className={classes.star_img} /> */}
                  <span className={classes.star_value}>{prod_star}</span>
                </p>
                <span className={classes.span_round} style={{ marginLeft: 20 }}>
                  <div className={classes.color_span1}></div>
                  <div className={classes.color_span2}></div>
                  <div className={classes.color_span3}></div>
                  <p style={{ color: "white" }}>+2</p>
                </span>
              </div>

              <div className={classes.price_div}>
                <div>&nbsp;</div>
                <div className={classes.prices}>
                  <p
                    className={classes.strike_price}
                    style={{ fontWeight: 400 }}
                  >
                    ${prod_strike_price}.0
                  </p>
                  &nbsp; &nbsp;
                  <p className={classes.actual_price}>${prod_price}.0</p>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ marginTop: "-30px" }}>
            <Button
              variant="contained"
              className={classes.add_to_cart_btn}
              style={{ fontWeight: 700 }}
            >
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default Prod_Card;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#1A2138 !important",
    borderRadius: "4px !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    position: "relative !important",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    transition: "all 0.3s ease-in-out 0s !important",
    display: "block !important",
  },

  sale_tag_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "end !important",
    marginTop: 30,
    marginRight: 25,
  },
  avail_tag_span: {
    backgroundColor: "rgb(255, 72, 66)",
    padding: "4px 8px",
    color: "white",
    borderRadius: "10px",
    textTransform: "uppercase !important",
    position: "absolute",
    top: "12px",
    right: "19px",
  },
  star_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "space-between !important",
    marginTop: "-20px !important",
    padding: "0px 10px",
  },
  prod_name: {
    color: "white !important",
    marginTop: -"36px !important",
    textOverflow: "ellipsis !important",
    whiteSpace: "nowrap !important",
    overflow: "hidden !important",
    fontSize: "1rem !important",
    padding: "7px 10px !important",
  },
  star_img: {
    height: "22px",
    width: "22px",
  },
  star_value: {
    fontSize: "16px !important",
    paddingLeft: "5px !important",
    color: "white !important",
  },
  span_round: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "flex-end !important",
    marginTop: 10,
  },
  color_span1: {
    marginLeft: "-4px !important",
    borderRadius: "50% !important",
    width: "21.6px !important",
    height: "21.6px !important",
    border: "2px solid rgb(26, 33, 56) !important",
    boxShadow: "rgb(0 0 0 / 24%) -1px 1px 2px inset !important",
    backgroundColor: "aqua !important",
  },
  color_span2: {
    marginLeft: "-4px !important",
    borderRadius: "50% !important",
    width: "21.6px !important",
    height: "21.6px !important",
    border: "2px solid rgb(26, 33, 56) !important",
    boxShadow: "rgb(0 0 0 / 24%) -1px 1px 2px inset !important",
    backgroundColor: "brown !important",
  },
  color_span3: {
    marginLeft: "-4px !important",
    borderRadius: "50% !important",
    width: "21.6px !important",
    height: "21.6px !important",
    border: "2px solid rgb(26, 33, 56) !important",
    boxShadow: "rgb(0 0 0 / 24%) -1px 1px 2px inset !important",
    backgroundColor: "black !important",
  },
  price_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "flex-end !important",
    marginTop: "-20px !important",
  },
  strike_price: {
    textDecoration: "line-through !important",
    fontSize: "0.75rem !important",
    color: "rgb(99, 115, 129) !important",
    margin: "0px",
    lineHeight: 1.57143,
    fontFamily: "Montserrat",
  },
  actual_price: {
    fontSize: "20px !important",
    color: "white !important",
  },
  add_to_cart_btn: {
    display: "inline-flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    boxSizing: "border-box !important",
    backgroundColor: "transparent !important",
    outline: "0px",
    border: "0px",
    margin: "0px",
    cursor: "pointer !important",
    userSelect: "none !important",
    verticalAlign: "middle !important",
    appearance: "none !important",
    textDecoration: "none !important",
    lineHeight: 1.71429,
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    color: "rgb(255, 255, 255) !important",
    padding: "11px 16px !important",
    fontWeight: 700,
    borderRadius: "4px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: "rgb(255, 255, 255) !important",
    backgroundColor: "rgb(0, 125, 252) !important",
    width: "100% !important",
    boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
  },
  prices: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
  },
  star_rate: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
  },
  media: {
    height: 260,
  },
}));
