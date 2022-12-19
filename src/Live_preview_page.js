import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import commercehope_logo from "../src/assets/images/commercehope_logo.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Live_preview_page() {
  const classes = useStyles();
  return (
    <div className={classes.apps}>
      <Container maxWidth="false" className={classes.envato_div}>
        <div className={classes.logo_img}>
          <img
            src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"
            alt="evanto_img"
          />
        </div>

        <div>
          <Button variant="contained" className={classes.buy_now_btn}>
            Buy Now
          </Button>
        </div>
      </Container>

      <Container maxWidth="false" className={classes.navbar_div}>
        <div className={classes.commercehope_logo}>
          <img src={commercehope_logo} alt="evanto_img" />
        </div>

        <div>
          <Button className={classes.home_btn}>Home</Button>
          <Button className={classes.home_btn}>Documentation</Button>
        </div>
      </Container>

      <Container>
        <Typography
          variant="h2"
          className={classes.live_preview_h2}
          style={{ fontWeight: 700 }}
        >
          Live Preview
        </Typography>
        {/* <h2 className={classes.live_preview_h2}>Live Preview</h2> */}
      </Container>

      <Container>
        <Card className={classes.card_contain}>
          <div className={classes.card_img_div}>
            <CardMedia
              component="img"
              alt="card_img"
              height="140"
              image="https://app.commercehope.com/_next/image?url=%2Fimages%2Fcommercehope-client-app.png&w=1920&q=75"
              className={classes.card_img}
            />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={classes.card_content}
            >
              Front-end
            </Typography>
            <p className={classes.para_card}>
              The Front-end Application is designed for users to buy products
              online.
            </p>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.card_btn}>
              View Demo
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default Live_preview_page;

const useStyles = makeStyles({
  apps: {
    backgroundColor: "#1A2138 !important",
  },
  logo_img: {
    width: 193,
    display: "inline-block",
    backgroundSize: "152px 18px",
  },
  buy_now_btn: {
    boxShadow: "0 2px 0 #6f9a37 !important",
    backgroundColor: "#82b440 !important",
    fontSize: "18px !important",
    padding: "5px 20px !important",
    lineHeight: 2,
    color: "white !important",
    cursor: "pointer !important",
    textTransform: "capitalize !important",
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
  },
  home_btn: {
    cursor: "pointer",
    fontWeight: 700,
    lineHeight: 1.7142857142857142,
    fontSize: "19px !important",
    textTransform: "capitalize !important",
    minWidth: "64px !important",
    padding: "6px 8px !important",
    borderRadius: "4px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    color: "inherit !important",
    borderColor: "currentColor !important",
  },

  live_preview_h2: {
    margin: 0,
    fontWeight: "700px !important",
    lineHeight: 1.3333333333333333,
    color: "#fff !important",
    marginTop: "32px !important",
    marginBottom: "32px !important",
    textAlign: "center !important",
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
    maxWidth: "50% !important",
  },
  card_img_div: {
    width: "400px",
    height: "250px !important",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important",
    padding: "0px 92px !important",
  },

  card_img: {
    width: "100%",
    height: "100%",
  },
});
