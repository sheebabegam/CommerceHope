import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Fetch_Data from "../Fetch_Data";
import PowerSettingsNewSharpIcon from "@mui/icons-material/PowerSettingsNewSharp";
import logo_delivery from "../images/logo_delivery.jpg";

const useStyles = makeStyles({
  box2: {
    // display: 'flex',
    // justifyContent: 'space-around',
    // alignItems: 'baseline'
  },
  // "& .MuiPaper-root": {
  //   position: "sticky",
  //   top: 0,
  //   zIndex: 100,
  // },
  largeIcon: {
    width: "80px",
    height: "80px",
  },
  mainbar: {
    fontFamily: "cursive",
  },
});

const pages = ["Register", "Login"];

const Navbar = () => {
  const classes = useStyles();


  return (
    <AppBar position="static" className="mainbar">
      <header
        style={{
          background: "#6439ff",
          position: "sticky",
          top: 0,
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{ backgroundColor: "#6439ff", position: "sticky" }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                backgroundColor: "#6439ff",
                marginLeft: 10,
              }}
            >                
              <img
                src={logo_delivery}
                alt="Logo"
                style={{ height: "50px", width: "50px", marginRight: "20px" }}
              />
              
            </Box>

            <Box sx={{ marginRight: "-300px", fontFamily: "cursive" }}>
                <div
                  style={{
                    width: 700,
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "baseline",
                  }}
                >
                  <Link
                    to="/"
                    sx={{
                      textDecoration: "none",
                      backgroundColor: "#6439ff",
                    }}
                    className="link_underline"
                  >
                    <Button
                      sx={{
                        my: 1,
                        fontSize: 20,
                        color: "white",
                        textDecoration: "none",
                        display: "block",
                        textTransform: "capitalize",
                        fontFamily: "cursive",
                      }}
                    >
                      Home
                    </Button>
                  </Link>                  
                </div>
            </Box>

            
          </Toolbar>
        </Container>
      </header>
    </AppBar>
  );
};

export default Navbar;