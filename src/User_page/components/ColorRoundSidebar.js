import React, { Children } from "react";
import { makeStyles } from "@material-ui/styles";

function ColorRoundSidebar(props) {
  const classes = useStyles();
  const { style, children } = props;
  return (
    <div className={classes.flex_div_color}>
      <div className={classes.color_span1} style={style}></div>
      <div>
        <p style={{ marginTop: "3px" }}>&nbsp; {children}</p>
      </div>
    </div>
  );
}

export default ColorRoundSidebar;

const useStyles = makeStyles({
  color_span1: {
    borderRadius: "50% !important",
    width: "21.6px !important",
    height: "21.6px !important",
    border: "2px solid rgb(26, 33, 56) !important",
    boxShadow: "rgb(0 0 0 / 24%) -1px 1px 2px inset !important",
  },
  flex_div_color: {
    display: "flex !important",
    alignItems: "flex-start",
    justifyContent: "flext-start",
  },
});
