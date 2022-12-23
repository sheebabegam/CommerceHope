import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import star from "../assets/images/star.png";
import All_category from "../assets/JSON_data/All_category.json";
import Feature_prod from "../assets/JSON_data/Feature_prod.json";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Footer from "../Layouts/Footer";

function Landing_Page() {
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
          <div className={classes.viewall_btn_div}>
            <Button className={classes.viewall_btn}>
              View All
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowForwardIosRoundedIcon"
                height={25}
                width={25}
                fill="rgb(0, 125, 252)"
              >
                <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path>
              </svg>
            </Button>
          </div>
        </div>

        <div className={classes.footer_before_div}>
          <div className={classes.delivery_single_div}>
            <div className={classes.delivery_icon_div}>
              <LocalShippingIcon className={classes.delivery_icon} />
            </div>
            <div className={classes.ship_div}>
              <p className={classes.free_shipping}>Free Shipping</p>
              <p className={classes.pkr}>PKR 110 On All Orders</p>
            </div>
          </div>

          <div className={classes.delivery_single_div}>
            <div className={classes.delivery_icon_div}>
              <PermPhoneMsgIcon className={classes.delivery_icon} />
            </div>
            <div className={classes.ship_div}>
              <p className={classes.free_shipping}>Support 24/7</p>
              <p className={classes.pkr}>Contact us 24 Hours 7 Days A Week</p>
            </div>
          </div>

          <div className={classes.delivery_single_div}>
            <div className={classes.delivery_icon_div}>
              <SettingsBackupRestoreIcon className={classes.delivery_icon} />
            </div>
            <div className={classes.ship_div}>
              <p className={classes.free_shipping}>30 days return</p>
              <p className={classes.pkr}>30 Days Return Policy</p>
            </div>
          </div>

          <div className={classes.delivery_single_div}>
            <div className={classes.delivery_icon_div}>
              <CreditCardIcon className={classes.delivery_icon} />
            </div>
            <div className={classes.ship_div}>
              <p className={classes.free_shipping}>Payment Secure</p>
              <p className={classes.pkr}>100% Secure Payment</p>
            </div>
          </div>
        </div>
        <Footer />
        {/* <div>
          <div className={classes.news_flex_div}>
            <div className={classes.news_wholediv}>
              <div className={classes.form_div}>
                <div className={classes.letter_div}>
                  <Typography
                    variant="contained"
                    className={classes.news_letter}
                  >
                    Join newsletter
                  </Typography>
                </div>
                <div style={{ marginBottom: 50 }}>
                  <FormControl
                    sx={{
                      width: "700px",
                      height: "80px",
                      marginBottom: 50,
                      color: "white",
                      border: "1px solid white",
                    }}
                    inputProps={{ style: { color: "white" } }}
                    style={{ borderColor: "white" }}
                    className={classes.inputbox_footer}
                  >
                    <OutlinedInput
                      inputProps={{ style: { borderColor: "white" } }}
                      style={{ borderColor: "white" }}
                      sx={{
                        width: "700px",
                        height: "80px",

                        color: "white",
                        border: "1px solid white",
                      }}
                      endAdornment={
                        <Button
                          position="end"
                          style={{ color: "white", fontWeight: 700 }}
                          className={classes.button_form}
                        >
                          Subscribe
                        </Button>
                      }
                    />
                    <MyFormHelperText className={classes.email_req} />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "rgb(44 53 78)" }}>
            <div className={classes.footer_main_div1}>
              <Box sx={{ flexGrow: 1 }} className={classes.footer_main_div}>
                <Grid container spacing={1} className={classes.grid_back_color}>
                  <Grid item xs={2.5} className={classes.grid_back_color}>
                    <div>
                      <div className={classes.commercehope_logo_div}>
                        <div>
                          <svg
                            class="MuiBox-root css-10x59zd"
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 270.000000 279.000000"
                            preserveAspectRatio="xMidYMid meet"
                            width={55}
                            height={55}
                          >
                            <g
                              transform="translate(0.000000,279.000000) scale(0.100000,-0.100000)"
                              fill="#fff"
                              stroke="none"
                            >
                              <path d="M1306 2650 c-471 -60 -874 -387 -1034 -842 -123 -346 -84 -739 103 -1058 125 -212 302 -378 525 -490 279 -140 576 -172 878 -96 235 60 437 178 603 353 103 108 230 299 212 317 -4 3 -19 6 -34 6 -15 0 -56 9 -91 20 -60 19 -64 19 -76 3 -7 -10 -39 -54 -71 -98 -383 -527 -1147 -583 -1607 -118 -272 275 -372 684 -259 1060 98 323 361 593 680 696 197 64 404 70 609 17 92 -23 238 -90 327 -150 87 -58 213 -188 278 -285 30 -44 59 -79 65 -78 21 5 181 48 185 50 2 1 -9 24 -24 50 -191 331 -496 552 -862 628 -92 19 -311 27 -407 15z"></path>
                              <path
                                fill="#007DFC"
                                d="M1317 2225 c-664 -126 -923 -927 -458 -1419 211 -222 536 -311 836 -229 208 57 400 204 505 388 l23 41 -46 62 c-72 98 -92 170 -92 332 0 156 14 204 92 317 l44 65 -33 56 c-46 77 -168 204 -249 258 -77 51 -186 98 -274 120 -92 22 -257 26 -348 9z m328 -292 c83 -21 182 -75 238 -130 26 -25 47 -49 47 -52 0 -7 -119 -116 -167 -154 -23 -19 -24 -19 -63 17 -72 65 -114 81 -215 81 -74 0 -98 -4 -138 -24 -104 -51 -161 -146 -161 -271 -1 -89 21 -160 65 -213 106 -129 319 -135 453 -12 l38 35 94 -87 c52 -47 94 -89 94 -94 0 -17 -116 -111 -173 -139 -118 -57 -295 -76 -440 -45 -248 52 -424 252 -444 503 -27 356 261 630 637 605 41 -2 102 -11 135 -20z"
                              ></path>
                              <path d="M2575 1682 c-77 -33 -77 -33 -66 -83 19 -80 24 -239 11 -334 -7 -49 -13 -99 -14 -109 -1 -26 75 -64 139 -68 l49 -3 14 55 c19 75 22 390 4 488 l-14 72 -41 -1 c-23 0 -60 -8 -82 -17z"></path>
                            </g>
                          </svg>
                        </div>
                        <div style={{ marginTop: "-10px" }}>
                          <Typography
                            variant="h5"
                            className={classes.commhope_h5}
                            style={{ fontWeight: 750 }}
                          >
                            COMMERCEHOPE
                          </Typography>
                          <p className={classes.small_txt}>
                            Reactjs ecommerce script you need
                          </p>
                        </div>
                      </div>
                      <p className={classes.pak}>
                        Rattokala, PO Khas Tehsil Bhalwal Sargodha, Pakistan
                      </p>
                      <div className={classes.mail_footer}>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1bkwoc0"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="EmailRoundedIcon"
                          height={25}
                          width={25}
                          fill="rgb(145, 158, 171)"
                        >
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
                        </svg>{" "}
                        &nbsp;
                        <span>
                          <a
                            href="mailto:info@commercehope.com"
                            className={classes.info_link}
                          >
                            info@commercehope.com
                          </a>
                        </span>
                      </div>

                      <div className={classes.mail_footer}>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1bkwoc0"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="LocalPhoneRoundedIcon"
                          height={25}
                          width={25}
                          fill="rgb(145, 158, 171)"
                        >
                          <path d="m19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                        </svg>{" "}
                        &nbsp;
                        <a
                          href="tel:+923035501602"
                          className={classes.info_link}
                        >
                          +923035501602
                        </a>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <div>
                      <Typography
                        variant="h6"
                        className={classes.heading_color_footer}
                      >
                        Product
                      </Typography>
                    </div>
                    <div className={classes.heading_color_footer}>
                      <p>Application</p>
                      <p>Features</p>
                      <p>Requirement</p>
                      <p>Technology</p>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <div>
                      <Typography
                        variant="h6"
                        className={classes.heading_color_footer}
                      >
                        Resources
                      </Typography>
                    </div>
                    <div className={classes.heading_color_footer}>
                      <p>Changelog</p>
                      <p>Updates</p>
                      <p>Providers</p>
                      <p>Affiliat</p>
                      <p>Roadmap</p>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <div>
                      <Typography
                        variant="h6"
                        className={classes.heading_color_footer}
                      >
                        Company
                      </Typography>
                    </div>
                    <div className={classes.heading_color_footer}>
                      <p>Blog</p>
                      <p>About Us</p>
                      <p>Contact Us</p>
                      <p>Jobs</p>
                      <p>Team</p>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <div>
                      <Typography
                        variant="h6"
                        className={classes.heading_color_footer}
                      >
                        Follow Us
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div> */}
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

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
  const classes = useStyles();
  const helperText = React.useMemo(() => {
    if (focused) {
      return "Email required";
    }

    return "";
  }, [focused]);

  return (
    <FormHelperText
      style={{
        color: "white",
        marginLeft: 300,
        marginTop: 5,
        fontFamily: "Montserrat",
        fontSize: 13,
        fontWeight: 400,
      }}
    >
      {helperText}
    </FormHelperText>
  );
}

export default Landing_Page;

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
  delivery_single_div: {
    backgroundColor: "rgb(26, 33, 56) !important",
    color: "rgb(255, 255, 255) !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    position: "relative !important",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    transition: "all 0.3s ease-in-out 0s !important",
    textAlign: "center !important",
    borderRadius: "8px !important",
    width: "19.3% !important",
    padding: "25px 0px !important",
    marginRight: "20px !important",
    webkitBoxAlign: "center",
  },
  footer_before_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    marginLeft: "47px !important",
  },
  delivery_icon_div: {
    position: " relative !important ",
    display: " flex !important ",
    alignItems: " center !important ",
    justifyContent: " center !important ",
    flexShrink: 0,
    width: " 40px !important ",
    height: " 40px !important ",
    fontFamily: " Montserrat !important ",
    fontSize: " 1.25rem !important ",
    lineHeight: 1,
    borderRadius: " 50% !important ",
    overflow: " hidden !important ",
    userSelect: " none !important ",
    marginLeft: " auto !important ",
    marginRight: " auto !important ",
    marginBottom: " 16px !important ",
    color: "rgb(0, 125, 252) !important",
    backgroundColor: "rgba(0, 125, 252, 0.16) !important",
  },
  free_shipping: {
    fontSize: " 1.125rem !important",
    margin: " 0px !important",
    fontWeight: " 700 !important",
    lineHeight: " 1.55556 !important",
    fontSize: " 1.2rem !important",
    fontFamily: " Montserrat !important",
    color: "rgb(255, 255, 255) !important",
    textTransform: " capitalize !important",
  },
  pkr: {
    margin: " 0px !important",
    lineHeight: " 1.57143 !important",
    fontFamily: " Montserrat !important",
    fontSize: " 0.75rem !important",
    overflow: " hidden !important",
    textOverflow: " ellipsis !important",
    whiteSpace: " nowrap !important",
    fontWeight: " 500 !important",
    color: " rgb(145, 158, 171) !important",
  },
  news_wholediv: {
    flexBasis: "66.6667% !important",
    flexGrow: 0,
    // width: "65%",
    maxWidth: " 100% !important",
    boxSizing: " border-box !important",
    margin: " 0px !important",
    transition: " box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    borderRadius: " 4px !important",
    boxShadow: " none !important",
    marginTop: " 96px !important",
    paddingBottom: " 16px !important",
    color: "rgb(255, 255, 255) !important",
    background:
      "linear-gradient(rgb(26, 33, 56) 0%, rgb(26, 33, 56) 50%, rgb(44, 53, 78) 50%, rgb(44, 53, 78) 100%) !important",
  },
  news_letter: {
    fontSize: " 4rem !important",
    margin: " 0px !important",
    lineHeight: " 1.33333 !important",
    fontFamily: " Montserrat !important",
    textAlign: " center !important",
    textTransform: " uppercase !important",
    color: "rgb(255, 255, 255) !important",
    fontWeight: 700,
  },
  form_div: {
    display: " flex  !important",
    flexDirection: " column !important",
    padding: " 50px 16px !important",
    borderRadius: " 16px !important",
    background:
      "linear-gradient(to right bottom, rgb(0, 125, 252), rgb(1, 71, 140) 120%) !important",
  },
  input_box: {
    font: " inherit !important",
    letterSpacing: " inherit !important",
    color: " currentcolor !important",
    border: " 0px !important",
    boxSizing: " content-box !important",
    background: " none !important",
    height: " 1.4375em !important",
    margin: " 0px !important",
    display: " block !important",
    minWidth: " 0px !important",
    width: " 100% !important",
    animationName: " mui-auto-fill-cancel !important",
    animationDuration: " 10ms !important",
    padding: " 16.5px 0px 16.5px 14px !important",
    color: " rgb(255, 255, 255) !important",
  },
  viewall_btn_div: {
    display: " flex !important",
    alignItems: " center !important",
    justifyContent: " flex-end !important",
  },
  viewall_btn: {
    width: "469px !important",
    fontSize: "16px !important",
    // textTransform: "capitalize !important",
    display: " inline-flex!important",
    alignItems: " center!important",
    justifyContent: " center!important",
    position: " relative!important",
    boxSizing: " border-box!important",
    backgroundColor: " transparent!important",
    outline: " 0px!important",
    border: " 0px!important",
    margin: " 16px 0px 0px!important",
    cursor: " pointer!important",
    userSelect: " none!important",
    verticalAlign: " middle!important",
    appearance: " none!important",
    textDecoration: " none!important",
    fontWeight: " 700!important",
    lineHeight: " 1.71429!important",
    // fontSize: " 0.875rem!important",
    textTransform: " capitalize!important",
    fontFamily: " Montserrat!important",
    minWidth: " 64px!important",
    padding: " 6px 8px!important",
    borderRadius: " 4px!important",
    float: " right!important",
    transition:
      " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: " rgb(0, 125, 252) !important",
  },
  button_form: {
    display: " inline-flex !important",
    alignItems: " center !important",
    justifyContent: " center !important",
    position: " relative !important",
    boxSizing: " border-box !important",
    outline: " 0px!important",
    border: " 0px currentcolor !important",
    margin: " 0px 8px 0px 0px !important",
    cursor: " pointer !important",
    userSelect: " none !important",
    verticalAlign: " middle !important",
    appearance: " none !important",
    textDecoration: " none !important",
    fontWeight: " 700 !important",
    lineHeight: " 1.71429 !important",
    fontSize: " 16px !important",
    textTransform: " capitalize !important",
    fontFamily: " Montserrat !important",
    minWidth: " 64px !important",
    padding: " 5px 18px !important",
    borderRadius: " 4px !important",
    boxShadow: " rgb(0 0 0 / 24%) 0px 8px 16px 0px !important",
    transition:
      " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    backgroundColor: " rgb(255, 255, 255) !important",
    color: " rgb(0, 0, 0) !important",
  },
  inputbox_footer: {
    font: " inherit !important",
    letterSpacing: " inherit !important",
    color: " currentcolor !important",
    border: " 0px !important",
    boxSizing: " content-box !important",
    background: " none !important",
    height: " 1.4375em !important",
    margin: " 0px !important",
    display: " block !important",
    minWidth: " 0px !important",
    width: " 100% !important",
    padding: " 16.5px 0px 16.5px 14px !important",
  },
  news_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(rgb(26, 33, 56) 0%, rgb(26, 33, 56) 50%, rgb(44, 53, 78) 50%, rgb(44, 53, 78) 100%) !important",
  },
  email_req: {
    marginLeft: 300,
    color: "white",
  },
  commercehope_logo_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    fontFamily: "Montserrat !important",
  },
  footer_main_div: {
    backgroundColor: "rgb(44 53 78)",
    marginTop: 56,
  },
  commhope_h5: {
    fontSize: "1.6rem",
    color: "#fff",
    lineHeight: 1,
    textAlign: "left",
    padding: "0px",
    marginLeft: "10px !important",
    fontFamily: "Montserrat !important",
  },
  small_txt: {
    margin: "0px !important",
    fontFamily: " Montserrat !important",
    textTransform: "uppercase !important",
    fontSize: "10.5px !important",
    marginRight: "3px !important",
    paddingLeft: "11px !important",
    marginTop: "-2px !important",
    color: "white",
  },
  grid_back_color: {
    backgroundColor: "rgb(44 53 78)",
  },
  pak: {
    color: "white",
    textAlign: "start",
  },
  info_link: {
    textDecoration: "none",
    color: "white",
  },
  mail_footer: {
    textAlign: "start",
  },
  heading_color_footer: {
    color: "white",
    textAlign: "start",
  },
  footer_main_div1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 225,
  },
});
