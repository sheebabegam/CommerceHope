import React from "react";
import Navbar from "../Layouts/Navbar";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Paper, Button } from "@mui/material";
import Footer from "../Layouts/Footer";

function Register() {
  const classes = useStyles();
  return (
    <div className={classes.color_main_div}>
      <Navbar />

      <div>
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
          <p className={classes.para_login}>
            Reactjs Ecommerce script you need.
          </p>
        </div>

        <div className={classes.login_form_main_div}>
          <div>
            <div>
              <Typography
                variant="h4"
                className={classes.login_h4}
                style={{ fontWeight: 700 }}
              >
                Get Started
              </Typography>
              <p className={classes.login_p}>Create an account for free.</p>
            </div>
            <div>
              <div className={classes.flex_reg_div}>
                <CssTextField
                  className={classes.fields}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="text"
                  label="First Name"
                  name="firstname"
                  style={{
                    fontFamily: "Montserrat",
                    height: 70,
                    color: "rgb(145, 158, 171)",
                    width: "49%",
                    marginRight: "20px !important",
                  }}
                  id="input-with-icon-textfield"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: {
                      color: "rgb(145, 158, 171)",
                      fontFamily: "Montserrat",
                    },
                  }}
                  // value={firstname}
                  // onChange={(e) => setFirstname(e.target.value)}
                />{" "}
                &nbsp; &nbsp;
                <CssTextField
                  className={classes.fields}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="text"
                  label="Last Name"
                  name="lastname"
                  style={{
                    fontFamily: "Montserrat",
                    height: 70,
                    color: "rgb(145, 158, 171)",
                    width: "49%",
                  }}
                  id="input-with-icon-textfield"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: {
                      color: "rgb(145, 158, 171)",
                      fontFamily: "Montserrat",
                    },
                  }}
                  // value={firstname}
                  // onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div className={classes.flex_reg_div}>
                <CssTextField
                  className={classes.fields}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="text"
                  label="Gender"
                  name="gender"
                  style={{
                    fontFamily: "Montserrat",
                    height: 70,
                    color: "rgb(145, 158, 171)",
                    width: "49%",
                    marginRight: "20px !important",
                  }}
                  id="input-with-icon-textfield"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: {
                      color: "rgb(145, 158, 171)",
                      fontFamily: "Montserrat",
                    },
                  }}
                  // value={firstname}
                  // onChange={(e) => setFirstname(e.target.value)}
                />{" "}
                &nbsp; &nbsp;
                <CssTextField
                  className={classes.fields}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="text"
                  label="Phone No"
                  name="phone"
                  style={{
                    fontFamily: "Montserrat",
                    height: 70,
                    color: "rgb(145, 158, 171)",
                    width: "49%",
                  }}
                  id="input-with-icon-textfield"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: {
                      color: "rgb(145, 158, 171)",
                      fontFamily: "Montserrat",
                    },
                  }}
                  // value={firstname}
                  // onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                label="Email Address"
                name="email"
                style={{
                  fontFamily: "Montserrat",
                  height: 70,
                  color: "rgb(145, 158, 171)",
                }}
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: {
                    color: "rgb(145, 158, 171)",
                    fontFamily: "Montserrat",
                  },
                }}
                // value={firstname}
                // onChange={(e) => setFirstname(e.target.value)}
              />
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                type="text"
                label="Password"
                name="password"
                style={{
                  fontFamily: "Montserrat",
                  height: 70,
                  color: "rgb(145, 158, 171)",
                }}
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon style={{ color: "rgb(145, 158, 171)" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityOffIcon
                        style={{ color: "rgb(145, 158, 171)" }}
                      />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: {
                    color: "rgb(145, 158, 171)",
                    fontFamily: "Montserrat",
                  },
                }}
                // value={firstname}
                // onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div>
              <Button
                variant="contained"
                className={classes.login_btn}
                style={{ fontWeight: 700, marginTop: 20, marginBottom: 20 }}
              >
                Register
              </Button>
            </div>
            <div>
              <p className={classes.agree}>
                Already have an account?{" "}
                <a href="/commercehope/login" className={classes.get_started}>
                  Login
                </a>
              </p>
              <p className={classes.account_agree}>
                By registering, I agree to Commercehope{" "}
                <a href="#" className={classes.color_reg_link}>
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className={classes.color_reg_link}>
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#9c9a9a",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#9c9a9a",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#9c9a9a",
    },
    "&:hover fieldset": {
      borderColor: "pink",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#9c9a9a",
    },
  },
  fontFamily: "Montserrat !important",
  height: "70px !important",
});

export default Register;

const useStyles = makeStyles({
  color_main_div: {
    backgroundColor: "#1A2138 !important",
  },
  login_main_div: {
    background:
      "linear-gradient(to right bottom, rgb(0, 125, 252), rgb(1, 71, 140) 120%)",
    width: "100%",
    borderRadius: "0px 0px 40px 40px",
    padding: "48px 48px 128px",
  },
  welcome_login: {
    margin: "0px",
    fontSize: "3rem",
    fontFamily: "Montserrat !important",
    textAlign: "center",
    fontWeight: 300,
    lineHeight: 0.7,
    color: "rgb(255, 255, 255)",
  },

  comm_login: {
    margin: "0px",
    fontSize: "4rem",
    fontFamily: "Montserrat !important",
    textAlign: "center",
    fontWeight: 700,
    lineHeight: 1.33333,
    color: "rgb(255, 255, 255)",
  },
  para_login: {
    margin: "0px",
    fontSize: "1.3rem",
    fontFamily: "Montserrat !important",
    textAlign: "center",
    fontWeight: 400,
    lineHeight: 0.9,
    color: "rgb(255, 255, 255)",
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
  flex_reg_div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  color_reg_link: {
    color: "white",
  },
  account_agree: {
    color: "rgb(145, 158, 171)",
  },
});
