import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@mui/material/Typography";

function WelcomeText(props) {
  const classes = useStyles();
  //   const { onClick, children } = props;

  return (
    <div className={classes.head_main_div}>
      <div className={classes.login_main_div}>
        <Typography
          variant="h3"
          className={classes.welcome_login}
          // sx={{ fontWeight: 300 }}
        >
          Welcome to the
        </Typography>
        <Typography
          variant="h2"
          className={classes.comm_login}
          style={{ fontWeight: 700 }}
        >
          COMMERCEHOPE
        </Typography>
        <p className={classes.para_login}>Reactjs Ecommerce script you need.</p>
      </div>
    </div>
  );
}

export default WelcomeText;

const useStyles = makeStyles({
  login_main_div: {
    background:
      "linear-gradient(to right bottom, rgb(0, 125, 252), rgb(1, 71, 140) 120%)",
    width: "100%",
    borderRadius: "0px 0px 40px 40px",
    padding: "48px 48px 128px",
  },
  welcome_login: {
    margin: "0px",
    fontSize: "2rem",
    fontFamily: "Montserrat !important",
    textAlign: "center",
    fontWeight: 300,
    lineHeight: 0.7,
    color: "rgb(255, 255, 255)",
  },
  comm_login: {
    margin: "0px",
    fontSize: "3rem",
    fontFamily: "Montserrat !important",
    textAlign: "center",
    fontWeight: 700,
    lineHeight: 1.33333,
    color: "rgb(255, 255, 255)",
    marginTop: 10,
  },
  para_login: {
    margin: "0px",
    fontSize: "1rem",
    fontFamily: "Montserrat !important",
    textAlign: "center",
    fontWeight: 400,
    lineHeight: 0.9,
    color: "rgb(255, 255, 255)",
    marginTop: 10,
  },
  head_main_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
