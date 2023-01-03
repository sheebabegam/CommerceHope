import React, { useState, useEffect } from "react";
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
import RegisterNoReuse from "../Pages/RegisterNoReuse";
import { v4 as uuidv4 } from "uuid";
import api from "../../api/userInfo";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import axios from "axios";

function Login() {
  const classes = useStyles();
  const navigate = useNavigate();

  // Compare data
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/userInfo`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const LOCAL_STORAGE_KEY = "userInfo";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mySubmit = () => {
    for (let i = 0; i < APIData.length; i++) {
      let input_email = document.getElementById("email").value;
      let matchContact = APIData[i].email == input_email;
      if (matchContact) {
        let input_password = document.getElementById("password").value;
        if (APIData[i].password == input_password) {
          console.log("You Are Successfully Logged In");
          console.log("APIData is", APIData[i]);
          localStorage.setItem("userdata", JSON.stringify(APIData[i]));
          navigate("/commercehope");
        } else {
          console.log("Incorrect password");
        }
      } else {
        console.log("This is not a registerd email");
      }
    }
  };

  return (
    <div className={classes.color_main_div}>
      {/* <Navbar /> */}

      <div>
        <WelcomeText />
        <FormContainer>
          <FormMainHeading>Login</FormMainHeading>
          <FormSubHeading>Login to your account to continue</FormSubHeading>

          <form className={classes.form} onSubmit={handleSubmit(mySubmit)}>
            <CssTextField
              className={classes.fields}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              multiline
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i,
                  message: "This is not a valid email",
                },
              })}
            />

            <CssTextField
              className={classes.fields}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              multiline
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4})/i,
                  message:
                    "Must contain at least  1 Lower alphabet, 1 Upper alphabet, 1 Number & a special character",
                },

                maxLength: {
                  value: 10,
                  message: "Password cannot exceed more than 10 Characters",
                },
              })}
            />
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                // onClick={loginSubmit}
                data-toggle="modal"
              >
                Login
              </Button>
            </div>

            <div>
              <AccountText>
                <p style={{ color: "white" }}>
                  {" "}
                  Don’t have an account? &nbsp;
                  <a
                    href="/commercehope/register"
                    // href="/commercehope/register-reuse"
                    style={{ color: "rgb(0, 125, 252)" }}
                  >
                    Get started
                  </a>
                </p>
              </AccountText>
              <TermsText></TermsText>
            </div>
          </form>
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
