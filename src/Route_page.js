import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Live_Preview_cards from "./User_page/assets/JSON_data/Live_Preview_cards.json";
import { Link } from "react-router-dom";
import Navbar from "./User_page/Layouts/Navbar";

function Route_page() {
  const classes = useStyles();
  return (
    <div className={classes.apps}>
      {/* <Container maxWidth="false" className={classes.envato_div}>
        <div className={classes.logo_img} style={{ marginTop: "10px" }}>
          <img
            src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            alt="evanto_img"
            className={classes.envato_image}
          />
        </div>

        <div className={classes.buy_now_div}>
          <Button variant="contained" className={classes.buy_now_btn}>
            Buy Now
          </Button>
        </div>
      </Container> */}

      {/* <Container maxWidth="false" className={classes.navbar_div}>
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

        <div>
          <Button className={classes.home_btn} style={{ fontWeight: 700 }}>
            Home
          </Button>
          <Button className={classes.home_btn} style={{ fontWeight: 700 }}>
            Documentation
          </Button>
        </div>
      </Container> */}
      {/* <Navbar /> */}

      <Container>
        <Typography
          variant="h2"
          className={classes.live_preview_h2}
          style={{ fontWeight: 700 }}
        >
          Live Preview
        </Typography>
      </Container>

      <div
        className={classes.map_div}
        style={{
          display: "flex",
          justifyContent: "center !important",
          alignItems: "center !important",
          width: "100%",
          margin: "0px 225px",
        }}
      >
        {Live_Preview_cards.map((data, i) => (
          <Card
            className={classes.card_contain}
            style={{
              width: "70% !important",
              marginRight: "20px",
              // padding: "0px 100px !important",
            }}
          >
            <div
              className={classes.card_img_div}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "70% !important",
                height: "100% !important",
              }}
            >
              <CardMedia
                component="img"
                alt="card_img"
                height="140"
                image={data.img}
                className={classes.card_img}
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={classes.card_content}
                style={{ fontWeight: 700 }}
              >
                {data.card_header}
              </Typography>
              <p className={classes.para_card} style={{ width: "670px" }}>
                {data.para_txt}
              </p>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className={classes.view_btn_div}
            >
              <div>
                <Link to={data.link} style={{ textDecoration: "none" }}>
                  <Button variant="contained" className={classes.view_btn}>
                    View Demo
                  </Button>
                </Link>
              </div>
            </CardActions>
          </Card>
        ))}

        {/* <div
          style={{
            height: "106px !important",
            width: "100% !important",
            backgroundColor: "#1A2138 !important",
          }}
        ></div> */}
      </div>
    </div>
  );
}

export default Route_page;

const useStyles = makeStyles({
  apps: {
    backgroundColor: "#1A2138 !important",
    height: 920,
  },
  logo_img: {
    display: "inline-block",
    backgroundSize: "152px 18px",
  },
  buy_now_btn: {
    boxShadow: "0 2px 0 #6f9a37 !important",
    backgroundColor: "#82b440 !important",
    fontSize: "16px !important",
    padding: "5px 20px !important",
    lineHeight: 1.5,
    fontWeight: 400,
    color: "white !important",
    cursor: "pointer !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat, sans-serif !important",
  },
  envato_div: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "space-between !important",
    fontSize: "12px",
    height: "74px",
    backgroundColor: "#262626 !important",
    zIndex: 100,
    lineHeight: "54px",
    borderBottom: "1px solid black !important",
  },

  navbar_div: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "center !important",
    backgroundColor: "#1A2138",
    color: "#fff !important",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
    padding: "10px 30px !important",
  },
  home_btn: {
    cursor: "pointer",
    fontWeight: 700,
    lineHeight: 1.7142857142857142,
    fontSize: "16px !important",
    textTransform: "capitalize !important",
    minWidth: "64px !important",
    padding: "6px 8px !important",
    borderRadius: "4px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    color: "inherit !important",
    borderColor: "currentColor !important",
    fontFamily: "Montserrat !important",
  },

  live_preview_h2: {
    margin: 0,
    fontWeight: "700px !important",
    lineHeight: 1.3333333333333333,
    color: "#fff !important",
    paddingTop: "32px !important",
    marginBottom: "32px !important",
    textAlign: "center !important",
    fontFamily: "Montserrat !important",
  },

  card_contain: {
    backgroundColor: "#1A2138 !important",
    color: "#fff !important",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    borderRadius: "4px !important",
    boxShadow: "none !important",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)) !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    position: "relative",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    transition: "all ease-in-out 0.3s !important",
    textAlign: "center !important",
    padding: "24px !important",
    fontFamily: "Montserrat !important",
  },
  card_img_div: {
    // width: "400px",
    // height: "250px !important",
    // display: "flex !important",
    // justifyContent: "center !important",
    // alignItems: "center !important",
    // padding: "0px 92px !important",
  },

  card_img: {
    width: "400px !important",
    height: "250px !important",
  },
  commercehope_logo_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat !important",
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
  },

  envato_image: {
    height: "23px !important",
  },
  buy_now_div: {
    fontFamily: "Montserrat !important",
  },

  para_card: {
    margin: "0px !important",
    lineHeight: 1.5,
    fontSize: "21px !important",
    fontFamily: "Montserrat !important",
    fontWeight: 400,
    color: "#919EAB !important",
  },
  card_content: {
    fontSize: "2.5rem !important",
    margin: "0px !important",
    fontWeight: 700,
    lineHeight: 1.5,
    fontFamily: "Montserrat !important",
    color: "#fff !important",
  },

  view_btn: {
    // display: "inline-flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    boxSizing: "border-box !important",
    outline: "0 !important",
    border: "0 !important",
    margin: "0 !important",
    borderRadius: "0 !important",
    padding: "0 !important",
    cursor: "pointer !important",
    userSelect: "none !important",
    verticalAlign: "middle !important",
    textDecoration: "none !important",
    color: "inherit !important",
    fontWeight: " 700 !important",
    lineHeight: "1.7142857142857142 !important",
    fontSize: "01.1rem !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    // minWidth: "64px !important",
    padding: "8px 22px !important",
    borderRadius: "4px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: "#fff !important",
    backgroundColor: "#007DFC !important",
    boxShadow: "0 8px 16px 0 rgb(0 125 252 / 24%) !important",
    height: "60px !important",
    marginTop: "16px !important",
    marginBottom: "16px !important",
  },
  view_btn_div: {
    display: "flex !important",
    justifyContent: "ceneter !impoerant",
    alignItems: "center !impoerant",
  },
});
