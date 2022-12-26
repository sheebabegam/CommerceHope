import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
import ReusableInput from "../components/ReusableInput";
import FormButton from "../components/FormButton";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import api from "../../api/userInfo";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import WelcomeText from "../components/WelcomeText";
import FormContainer from "../components/FormContainer";
import FormMainHeading from "../components/FormMainHeading";
import FormSubHeading from "../components/FormSubHeading";
import TermsText from "../components/TermsText";
import AccountText from "../components/AccountText";

function Register() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  console.log("Age", gender);

  // const LOCAL_STORAGE_KEY = "contacts";

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const [userInfo, setuserInfo] = useState([]);

  // console.log(userInfo);

  // const retriveContacts = async () => {
  //   const response = await api.get("/userInfo");
  //   return response.data;
  // };

  // const onSubmit = async (data) => {
  //   console.log(data);
  //   const request = {
  //     id: uuidv4(),
  //     ...data,
  //   };

  //   const response = await api.post("/userInfo", request);
  //   console.log(response);
  //   setuserInfo([...userInfo, response.data]);
  // };

  // useEffect(() => {
  //   // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   // if (retriveContacts) setuserInfo(retriveContacts);

  //   const getContacts = async () => {
  //     const allContacts = await retriveContacts();
  //     if (allContacts) setuserInfo(allContacts);
  //   };
  //   getContacts();
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
  // }, [userInfo]);

  // const contacts = async () => {
  //   const response = await api.get("/userInfo");
  //   return response.data;
  // };

  return (
    <div className={classes.color_main_div}>
      <Navbar />

      <div>
        <WelcomeText />
        <FormContainer>
          <FormMainHeading>Get Started</FormMainHeading>
          <FormSubHeading>Create an account for free.</FormSubHeading>
          <div>
            <div className={classes.flex_reg_div}>
              <ReusableInput
                label="First Name"
                name="firstname"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
                    </InputAdornment>
                  ),
                }}
                // {...register("firstname", {
                //   required: "First Name is required",
                // })}
              />
              &nbsp; &nbsp;
              <ReusableInput
                label="Last Name"
                name="lastname"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
                    </InputAdornment>
                  ),
                }}
                // {...register("firstname", {
                //   required: "Last Name is required",
                // })}
              />
            </div>

            <div className={classes.flex_reg_div}>
              <FormControl fullWidth>
                <InputLabel
                  variant="outlined"
                  style={{ color: "white" }}
                  // margin="normal"
                  // htmlFor="uncontrolled-native"
                  // id="demo-simple-select-label"
                >
                  Gender
                </InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  label="Gender"
                  value={gender}
                  onChange={handleChange}
                  defaultValue={30}
                  style={{
                    border: "1px solid rgb(133, 133, 133)",
                    color: "white",
                  }}
                  inputProps={{
                    name: "gender",
                    // id: "uncontrolled-native",
                  }}
                  // {...register("gender", {
                  //   required: "Last Name is required",
                  // })}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                </Select>
              </FormControl>
              &nbsp; &nbsp;
              <ReusableInput
                label="Phone No"
                name="phone"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
                    </InputAdornment>
                  ),
                }}

                //  value={}
                //  onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <ReusableInput
              label="Email Address"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon style={{ color: "rgb(145, 158, 171)" }} />
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

              //  value={}
              //  onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div>
            <FormButton>Register</FormButton>
          </div>
          <div>
            <AccountText>
              <p style={{ color: "white" }}>
                {" "}
                Already have an account? &nbsp;
                <a
                  href="/commercehope/login"
                  style={{ color: "rgb(0, 125, 252)" }}
                >
                  Login
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

export default Register;

const useStyles = makeStyles({
  color_main_div: {
    backgroundColor: "#1A2138 !important",
  },

  // login_h4: {
  //   margin: "0px 0px 16px",
  //   fontWeight: 700,
  //   lineHeight: 1.5,
  //   fontSize: "1.25rem",
  //   fontFamily: "Montserrat !important",
  //   textAlign: "center",
  //   color: "rgb(255, 255, 255)",
  // },
  // login_p: {
  //   margin: "0px 0px 40px",
  //   lineHeight: 1.5,
  //   fontSize: "1rem",
  //   fontFamily: "Montserrat !important",
  //   fontWeight: 400,
  //   textAlign: "center",
  //   color: "rgb(145, 158, 171)",
  // },
  // login_form_main_div: {
  //   backgroundColor: "rgb(26, 33, 56)",
  //   color: "rgb(255, 255, 255)",
  //   borderRadius: "4px",
  //   boxShadow: "none",
  //   backgroundImage: "none",
  //   overflow: "hidden",
  //   position: "relative",
  //   zIndex: 0,
  //   border: " 1px solid rgba(145, 158, 171, 0.24)",
  //   transition: "all 0.3s ease-in-out 0s",
  //   maxWidth: "650px",
  //   margin: "-80px auto auto",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   padding: "24px",
  // },
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
  // get_started: {
  //   textDecoration: "none",
  //   fontSize: "16px",
  //   fontWeight: 700,
  //   fontFamily: "Montserrat !important",
  //   color: "rgb(0, 125, 252)",
  // },

  flex_reg_div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // color_reg_link: {
  //   color: "white",
  // },
  // account_agree: {
  //   color: "rgb(145, 158, 171)",
  // },
});
