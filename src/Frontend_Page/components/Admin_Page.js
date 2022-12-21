import React, { useState } from "react";
import Navbar from "./Navbar";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import star from "../../assets/images/star.png";
import All_category from "../../assets/JSON_data/All_category.json";
import Feature_prod from "../../assets/JSON_data/Feature_prod.json";

function Admin_Page() {
  const classes = useStyles();
  const items = [
    {
      big_txt: "Top Products Of The Year.",
      small_txt: "20% off on Top Quality Products and Free Shipping.",
      shop: "Shop Now",
      see: "See All",
      img: "https://app.commercehope.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommerceope-banner-1.1418341e.png&w=1920&q=75",
    },
    {
      big_txt: "Summer Colors in Formal Details",
      small_txt: "30% off on Men Shirts and Free Shipping.",
      shop: "Shop Now",
      see: "See All",
      img: "https://app.commercehope.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommerceope-banner-2.7897a061.png&w=1920&q=75",
    },
    {
      big_txt: "Summer Colors in Formal Details",
      small_txt: "30% off on Men Shirts and Free Shipping.",
      shop: "Shop Now",
      see: "See All",
      img: "https://app.commercehope.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommerceope-banner-3.a9484857.png&w=1920&q=75",
    },
  ];

  const [all, setAll] = useState("");
  const [men, setMen] = useState("");
  const [women, setWomen] = useState("");
  const [kids, setKids] = useState("");

  const handleAll = () => {
    setAll("all");
    setMen("");
    setWomen("");
    setKids("");
  };
  const handleMen = () => {
    setAll("");
    setMen("men");
    setWomen("");
    setKids("");
  };
  const handleWomen = () => {
    setAll("");
    setMen("");
    setWomen("women");
    setKids("");
  };
  const handleKids = () => {
    setAll("");
    setMen("");
    setWomen("");
    setKids("kids");
  };

  return (
    <div className={classes.whole_div}>
      <Navbar />
      <div>
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </Carousel>
      </div>
      <div>
        <div className={classes.top_collections_div}>
          <Typography
            variant="h2"
            className={classes.top_coll_h2}
            style={{ fontWeight: 700 }}
          >
            Top Collections
          </Typography>
          <p className={classes.browse_p} style={{ fontWeight: 400 }}>
            Browse our top collections of Top Products
          </p>
        </div>

        <div>
          <Link
            className={classes.nav_category_links}
            style={{ fontWeight: 600 }}
            onClick={handleAll}
          >
            All <br />
            <span
              className={classes.span_line}
              style={
                all === "all"
                  ? {
                      display: "block",
                    }
                  : { display: "none" }
              }
            ></span>
          </Link>

          <Link
            className={classes.nav_category_links}
            style={{ fontWeight: 600 }}
            onClick={handleMen}
          >
            Men
            <span
              className={classes.span_line}
              style={
                men === "men"
                  ? {
                      display: "block",
                    }
                  : { display: "none" }
              }
              // onClick={handleAll}
            ></span>
          </Link>

          <Link
            className={classes.nav_category_links}
            style={{ fontWeight: 600 }}
            onClick={handleWomen}
          >
            Women
            <span
              className={classes.span_line}
              style={
                women === "women"
                  ? {
                      display: "block",
                    }
                  : { display: "none" }
              }
              // onClick={handleAll}
            ></span>
          </Link>

          <Link
            className={classes.nav_category_links}
            style={{ fontWeight: 600 }}
            onClick={handleKids}
          >
            Kids
            <span
              className={classes.span_line}
              style={
                kids === "kids"
                  ? {
                      display: "block",
                    }
                  : { display: "none" }
              }
            ></span>
          </Link>
        </div>
        <div style={{ width: "90%", marginLeft: "120px" }}>
          <div className={classes.card_flex_div} style={{ padding: 20 }}>
            {All_category.map((data, i) => (
              <Card className={classes.root} key={i}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    //   style={{
                    //     backgroundImage: `url({${data.prod_img}})`,
                    //   }}
                    image={data.prod_img}
                  />
                  <div className={classes.sale_tag_div}>
                    <span className={classes.avail_tag_span}>{data.stock}</span>
                  </div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.prod_name}
                      style={{ fontWeight: 600 }}
                    >
                      {data.prod_name}
                    </Typography>
                    <div className={classes.star_div}>
                      <p className={classes.star_rate}>
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img}
                        />
                        <span className={classes.star_value}>
                          {data.prod_star}
                        </span>
                      </p>
                      <span className={classes.span_round}>
                        <div className={classes.color_span1}></div>
                        <div className={classes.color_span2}></div>
                        <div className={classes.color_span3}></div>
                      </span>
                    </div>

                    <div className={classes.price_div}>
                      <div>&nbsp;</div>
                      <div className={classes.prices}>
                        <p className={classes.strike_price}>
                          {data.prod_strike_price}
                        </p>
                        <p className={classes.actual_price}>
                          {data.prod_price}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ marginTop: "-27px !important" }}>
                  <Button
                    variant="contained"
                    className={classes.add_to_cart_btn}
                    style={{ fontWeight: 700 }}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className={classes.feture_prod_div}>
            <Typography variant="h2" className={classes.feture_prod}>
              Featured Products
            </Typography>
          </div>
          <div style={{ width: "90%", marginLeft: "120px" }}>
            <div className={classes.card_flex_div} style={{ padding: 20 }}>
              {Feature_prod.map((data, i) => (
                <Card className={classes.root} key={i}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      //   style={{
                      //     backgroundImage: `url({${data.prod_img}})`,
                      //   }}
                      image={data.prod_img}
                    />
                    <div className={classes.sale_tag_div}>
                      <span className={classes.avail_tag_span}>
                        {data.stock}
                      </span>
                    </div>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.prod_name}
                        style={{ fontWeight: 600 }}
                      >
                        {data.prod_name}
                      </Typography>
                      <div className={classes.star_div}>
                        <p className={classes.star_rate}>
                          <img
                            src={star}
                            alt="star"
                            className={classes.star_img}
                          />
                          <span className={classes.star_value}>
                            {data.prod_star}
                          </span>
                        </p>
                        <span className={classes.span_round}>
                          <div className={classes.color_span1}></div>
                          <div className={classes.color_span2}></div>
                          <div className={classes.color_span3}></div>
                        </span>
                      </div>

                      <div className={classes.price_div}>
                        <div>&nbsp;</div>
                        <div className={classes.prices}>
                          <p className={classes.strike_price}>
                            {data.prod_strike_price}
                          </p>
                          <p className={classes.actual_price}>
                            {data.prod_price}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ marginTop: "-27px !important" }}>
                    <Button
                      variant="contained"
                      className={classes.add_to_cart_btn}
                      style={{ fontWeight: 700 }}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Item = ({ big_txt, small_txt, shop, see, img }) => {
  const classes = useStyles();
  return (
    <Paper
      className={classes.background_carousel}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className={classes.card_div_caro}>
        <Typography
          variant="h1"
          className={classes.big_caro_txt}
          style={{ fontWeight: 700 }}
        >
          {big_txt}
        </Typography>
        <Typography variant="h6" className={classes.small_caro_txt}>
          {small_txt}
        </Typography>
        <Button
          variant="contained"
          className={classes.shop_caro_btn}
          style={{ fontWeight: 700 }}
        >
          Shop Now
        </Button>
        <Button
          variant="contained"
          className={classes.see_caro_btn}
          style={{ fontWeight: 700 }}
        >
          See All
        </Button>
      </div>
    </Paper>
  );
};

export default Admin_Page;

const useStyles = makeStyles({
  whole_div: {
    backgroundColor: "#1A2138 !important",
  },
  background_carousel: {
    height: 1000,
    maxWidth: "100%",
    justifyContent: "flex-start",

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignContent: "stretch",
  },
  card_div_caro: {
    width: "35% !important",
    padding: "24px !important",
    top: "50% !important",
    left: "0px !important",
    transform: "translateY(-50%) !important",
    textAlign: "left !important",
    position: "absolute !important",
    fontSize: "4rem !important",
  },
  big_caro_txt: {
    fontFamily: "Montserrat !important",
    color: "rgb(33, 43, 54) !important",
    lineHeight: 1.1,
    pointerEvents: "none !important",
    fontSize: "4.5rem !important",
  },
  shop_caro_btn: {
    margin: "8px 0px 0px !important",
    cursor: "pointer !important",
    userSelect: "none !important",
    verticalAlign: "middle !important",
    appearance: "none !important",
    fontWeight: 700,
    lineHeight: 1.71429,
    fontSize: "0.9375rem !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    padding: "31px 26px !important",
    borderRadius: "4px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: "rgb(255, 255, 255) !important",
    backgroundColor: "rgb(0, 125, 252) !important",
    boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
    height: "48px !important",
    // marginRight: 20,
  },
  see_caro_btn: {
    margin: "8px 0px 0px !important",
    cursor: "pointer !important",
    userSelect: "none !important",
    verticalAlign: "middle !important",
    appearance: "none !important",
    fontWeight: 700,
    lineHeight: 1.71429,
    fontSize: "0.9375rem !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    padding: "31px 26px !important",
    borderRadius: "4px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: "rgb(255, 255, 255) !important",
    backgroundColor: "rgb(33, 43, 54) !important",
    boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
    height: "48px !important",
    marginLeft: "20px !important",
  },
  top_coll_h2: {
    fontSize: "3.5rem !important",
    margin: "64px 0px 0px !important",
    fontWeight: 700,
    lineHeight: 1.33333,
    fontFamily: "Montserrat !important",
    color: "rgb(255, 255, 255) !important",
    textAlign: "center !important",
  },
  browse_p: {
    margin: "15px 0px !important",
    lineHeight: 1.5,
    fontSize: "1rem !important",
    fontFamily: "Montserrat !important",
    fontWeight: 400,
    textAlign: "center !important",
    textTransform: "capitalize !important",
    color: "white !important",
  },
  nav_category_links: {
    marginRight: "16px !important",
    color: "rgb(255, 255, 255) !important",
    display: "inline-flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    boxSizing: "border-box !important",
    backgroundColor: "transparent !important",
    outline: "0px",
    border: "0px",
    margin: "0px",
    borderRadius: "4px 4px 0px 0px !important",
    cursor: "pointer !important",
    userSelect: "none !important",
    verticalAlign: "middle !important",
    appearance: "none !important",
    textDecoration: "none !important",
    lineHeight: 1.25,
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    maxWidth: "360px !important",
    position: "relative !important",
    minHeight: "48px !important",
    flexShrink: 0,
    overflow: "hidden",
    whiteSpace: "normal",
    textAlign: "center",
    flexDirection: "column",
    padding: "0px 10px !important",
    minWidth: "48px !important",
    fontWeight: 600,
  },
  span_line: {
    left: "410.038px !important",
    width: "48px !important",
    borderRadius: "3px 3px 0px 0px !important",
    height: "3px !important",
    bottom: "0px !important",
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    backgroundColor: "rgb(0, 125, 252) !important",
  },
  star_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "space-between !important",
    marginTop: "-12px !important",
  },
  span_round: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "flex-end !important",
  },
  star_rate: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
  },
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
    margin: "10px 20px !important",
  },
  media: {
    height: 350,
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
  star_value: {
    fontSize: "16px !important",
    paddingLeft: "5px !important",
    color: "white !important",
  },

  star_img: {
    height: "22px",
    width: "22px",
  },
  strike_price: {
    textDecoration: "line-through !important",
    fontSize: "15px !important",
    color: "white !important",
  },
  actual_price: {
    fontSize: "20px !important",
    color: "white !important",
  },
  price_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "flex-end !important",
    marginTop: "-20px !important",
  },
  prices: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
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
  prod_name: {
    color: "white !important",
    marginTop: -"36px !important",
    textOverflow: "ellipsis !important",
    whiteSpace: "nowrap !important",
    overflow: "hidden !important",
    fontSize: "1.2rem !important",
  },
  avail_tag_span: {
    backgroundColor: "rgb(255, 72, 66)",
    padding: "6px 12px",
    color: "white",
    borderRadius: "10px",
    marginTop: "-692px !important",
    textTransform: "uppercase !important",
  },
  sale_tag_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "end !important",
    marginTop: 30,
    marginRight: 25,
  },
  card_flex_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    boxSizing: "border-box !important",
    flexFlow: "row wrap !important",
    marginLeft: "-16px !important",
    marginTop: "24px !important",
  },
  feture_prod: {
    color: "white !important",
    marginTop: "100px !important",
  },
});
