import React from "react";
import { makeStyles } from "@material-ui/styles";
import FormMainHeading from "../components/FormMainHeading";
import FormSubHeading from "../components/FormSubHeading";
import ReusableInput from "./ReusableInput";

function FormContainer(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.login_form_main_div}>
      <div>
        <FormMainHeading>{children}</FormMainHeading>
        {/* <FormSubHeading>{children}</FormSubHeading> */}
      </div>
    </div>
  );
}

export default FormContainer;

const useStyles = makeStyles({
  login_form_main_div: {
    backgroundColor: "rgb(26, 33, 56)",
    color: "rgb(255, 255, 255)",
    borderRadius: "4px",
    boxShadow: "none",
    backgroundImage: "none",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    border: " 1px solid rgba(145, 158, 171, 0.24)",
    transition: "all 0.3s ease-in-out 0s",
    maxWidth: "530px",
    margin: "-80px auto auto",
    flexDirection: "column",
    justifyContent: "center",
    padding: "24px",
  },
  //   login_h4: {
  //     margin: "0px 0px 16px",
  //     fontWeight: 700,
  //     lineHeight: 1.5,
  //     fontSize: "1.25rem",
  //     fontFamily: "Montserrat !important",
  //     textAlign: "center",
  //     color: "rgb(255, 255, 255)",
  //   },
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
