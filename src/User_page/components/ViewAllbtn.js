import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@mui/material";

function ViewAllbtn(props) {
  const classes = useStyles();
  const { onClick, children } = props;

  return (
    <div>
      <div className={classes.viewall_btn_div} onClick={onClick}>
        <Button className={classes.viewall_btn}>
          {children}
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowForwardIosRoundedIcon"
            height={25}
            width={25}
            fill="rgb(0, 125, 252)"
          >
            <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default ViewAllbtn;
const useStyles = makeStyles({
  viewall_btn_div: {
    display: " flex !important",
    alignItems: " center !important",
    justifyContent: " flex-end !important",
  },
  viewall_btn: {
    width: "469px !important",
    fontSize: "16px !important",
    display: " inline-flex!important",
    alignItems: " center!important",
    justifyContent: " center!important",
    position: " relative!important",
    boxSizing: " border-box!important",
    backgroundColor: " transparent!important",
    outline: " 0px!important",
    border: " 0px!important",
    margin: " 16px 0px 0px!important",
    cursor: " pointer!important",
    userSelect: " none!important",
    verticalAlign: " middle!important",
    appearance: " none!important",
    textDecoration: " none!important",
    fontWeight: " 700!important",
    lineHeight: " 1.71429!important",
    textTransform: " capitalize!important",
    fontFamily: " Montserrat!important",
    minWidth: " 64px!important",
    padding: " 6px 8px!important",
    borderRadius: " 4px!important",
    float: " right!important",
    transition:
      " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: " rgb(0, 125, 252) !important",
  },
});
