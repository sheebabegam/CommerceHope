import React from "react";
import Navbar from "../Layouts/Navbar";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Button } from "@mui/material";
import Footer from "../Layouts/Footer";
import ReusableInput from "../components/ReusableInput";
import FormButton from "../components/FormButton";
import WelcomeText from "../components/WelcomeText";
import TermsText from "../components/TermsText";
import AccountText from "../components/AccountText";
import FormContainer from "../components/FormContainer";
import FormMainHeading from "../components/FormMainHeading";
import FormSubHeading from "../components/FormSubHeading";

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.color_main_div}>
      <Navbar />

      <div>
        <WelcomeText />
        <FormContainer>
          <FormMainHeading>Login</FormMainHeading>
          <FormSubHeading>Login to your account to continue</FormSubHeading>

          <div>
            <ReusableInput
              label="Email Address"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              //  value={}
              //  onChange={(e) => setFirstname(e.target.value)}
            />

            <ReusableInput
              label="Password"
              name="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOffIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
              //  value={}
              //  onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.check_div}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
            </FormGroup>
            <a
              href="/commercehope/forget-password"
              className={classes.forget_pass}
            >
              Forget Password
            </a>
          </div>
          <div>
            <FormButton>Login</FormButton>
          </div>

          <div>
            <AccountText>
              <p style={{ color: "white" }}>
                {" "}
                Don’t have an account? &nbsp;
                <a
                  href="/commercehope/register"
                  style={{ color: "rgb(0, 125, 252)" }}
                >
                  Get started
                </a>
              </p>
            </AccountText>
            <TermsText></TermsText>
          </div>
        </FormContainer>
      </div>

      <Footer />
    </div>
  );
}

export default Login;

const useStyles = makeStyles({
  color_main_div: {
    backgroundColor: "#1A2138 !important",
  },
  login_h4: {
    margin: "0px 0px 16px",
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "1.25rem",
    fontFamily: "Montserrat !important",
    textAlign: "center",
    color: "rgb(255, 255, 255)",
  },
  login_p: {
    margin: "0px 0px 40px",
    lineHeight: 1.5,
    fontSize: "1rem",
    fontFamily: "Montserrat !important",
    fontWeight: 400,
    textAlign: "center",
    color: "rgb(145, 158, 171)",
  },
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
    maxWidth: "650px",
    margin: "-80px auto auto",
    flexDirection: "column",
    justifyContent: "center",
    padding: "24px",
  },
  check_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forget_pass: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 700,
    fontFamily: "Montserrat !important",
    color: "rgb(0, 125, 252)",
  },
  get_started: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 700,
    fontFamily: "Montserrat !important",
    color: "rgb(0, 125, 252)",
  },
});
