import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";

function FormButton(props) {
  const classes = useStyles();
  const { onClick, children } = props;

  return (
    <Button
      variant="contained"
      className={classes.login_btn}
      style={{ fontWeight: 700, marginTop: 20, marginBottom: 20 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default FormButton;

const useStyles = makeStyles({
  login_btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    outline: "0px",
    border: "0px",
    margin: "0px",
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    textDecoration: "none",
    fontWeight: 700,
    lineHeight: 1.71429,
    fontSize: "0.9375rem",
    textTransform: "capitalize",
    fontFamily: "Montserrat !important",
    minWidth: "64px",
    padding: "8px 22px",
    borderRadius: "4px",
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(0, 125, 252)",
    width: "100%",
    boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px",
    height: "55px",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
});
