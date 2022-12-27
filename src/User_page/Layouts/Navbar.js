import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Register", "Login"];

const Navbar = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{ flexGrow: 1 }}
      className={classes.navbar_div}
      style={{ position: "sticky" }}
    >
      <AppBar style={{ position: "sticky" }}>
        <div maxWidth="false" className={classes.navbar_div1}>
          <div className={classes.commercehope_logo_div}>
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

          <div className={classes.nav_btns}>
            <Link
              to="/commercehope"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            >
              <Button className={classes.nav_btn_css}>Home</Button>
            </Link>
            <div>
              <Button className={classes.nav_btn_css}>
                Categories <ExpandMoreIcon />
              </Button>
            </div>
            <Link
              to="/commercehope"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            >
              <Button className={classes.nav_btn_css}>Men</Button>
            </Link>
            <Link
              to="/commercehope"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            >
              <Button className={classes.nav_btn_css}>Women</Button>
            </Link>
            <Link
              to="/commercehope"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            >
              <Button className={classes.nav_btn_css}>Kids</Button>
            </Link>
            <Link
              to="/commercehope"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            >
              <NotificationsIcon
                className={classes.nav_icon_color}
              ></NotificationsIcon>
              <span
                className={classes.nav_icon_color}
                style={{ fontFamily: "Montserrat" }}
              >
                7
              </span>
            </Link>
            <Link
              to="/commercehope"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            >
              <ShoppingBasketIcon
                className={classes.nav_icon_color}
              ></ShoppingBasketIcon>
              <span
                className={classes.nav_icon_color}
                style={{ fontFamily: "Montserrat" }}
              >
                4
              </span>
            </Link>
            <Link
              to="/commercehope"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            >
              <SearchIcon className={classes.nav_icon_color}></SearchIcon>
              <span
                className={classes.nav_icon_color}
                style={{ fontFamily: "Montserrat" }}
              >
                4
              </span>
            </Link>

            <Link
              to="/commercehope/login"
              sx={{
                textDecoration: "none",
                backgroundColor: "#6439ff",
              }}
              className={classes.link_underline}
            >
              <AccountCircleIcon
                className={classes.nav_icon_color}
              ></AccountCircleIcon>
            </Link>
          </div>
        </div>
      </AppBar>
    </Box>
  );
};

export default Navbar;

const useStyles = makeStyles({
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

  navbar_div1: {
    display: "flex !important",
    justifyContent: "space-between !important",
    alignItems: "center !important",
    backgroundColor: "#1A2138",
    color: "#fff !important",
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
  nav_btns: {
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "space-between !important",
  },
  link_underline: {
    textDecoration: "none",
  },
  nav_btn_css: {
    textTransform: "capitalize !important",
    color: "white !important",
  },
  nav_icon_color: {
    color: "rgb(145, 158, 171) !important",
    fontFamily: "Montserrat",
  },
});
