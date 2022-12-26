import React from "react";
import { makeStyles } from "@material-ui/styles";

function AccountText(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div style={{ fontSize: "16px" }}>
      <p className={classes.agree} style={{ fontSize: "16px", color: "white" }}>
        <a className={classes.get_started}>{children}</a>
      </p>
      {/* <a className={classes.get_started}>{children}</a> */}
    </div>
  );
}

export default AccountText;

const useStyles = makeStyles({
  get_started: {
    textDecoration: "none",
    fontSize: "16px !important",
    fontWeight: 700,
    fontFamily: "Montserrat !important",
    color: "rgb(0, 125, 252) !important",
  },
});
