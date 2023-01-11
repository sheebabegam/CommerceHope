import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";

function FormMainHeading(props) {
  const classes = useStyles();
  const { children, style } = props;
  return (
    <Typography variant="h4" className={classes.login_h4} style={style}>
      {children}
    </Typography>
  );
}

export default FormMainHeading;

const useStyles = makeStyles({
  login_h4: {
    margin: "12px 0px 16px",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "1.25rem",
    fontFamily: "Montserrat !important",
    textAlign: "center",
    color: "rgb(255, 255, 255)",
  },
});
