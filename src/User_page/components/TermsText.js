import React from "react";
import { makeStyles } from "@material-ui/styles";

function TermsText(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div>
      <p className={classes.account_agree} style={{ fontWeight: 400 }}>
        By registering, I agree to Commercehope{" "}
        <a href="#" className={classes.color_reg_link}>
          Terms
        </a>{" "}
        and{" "}
        <a
          href="#"
          className={classes.color_reg_link}
          style={{ color: "rgb(0, 125, 252) !important" }}
        >
          Privacy Policy
        </a>
      </p>
    </div>
  );
}

export default TermsText;

const useStyles = makeStyles({
  account_agree: {
    color: "rgb(145, 158, 171)",
    fontSize: "16px",
  },

  color_reg_link: {
    color: "rgb(0, 125, 252) !important",
    fontSize: "16px",
  },
});
