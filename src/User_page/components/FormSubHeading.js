import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

function FormSubHeading(props) {
  const classes = useStyles();
  const { children, style } = props;
  return (
    <p className={classes.login_p} style={style}>
      {children}
    </p>
  );
}

export default FormSubHeading;

const useStyles = makeStyles({
  login_p: {
    margin: "0px 0px 40px",
    lineHeight: 1.5,
    fontSize: "1rem",
    fontFamily: "Montserrat !important",
    fontWeight: 400,
    textAlign: "center",
    color: "rgb(145, 158, 171)",
  },
});
