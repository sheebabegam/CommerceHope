import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
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
import ReusableInput from "../../../User_page/components/ReusableInput";
import FormButton from "../../../User_page/components/FormButton";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import api from "../../../api/userInfo";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import WelcomeText from "../../../User_page/components/WelcomeText";
import FormContainer from "../../../User_page/components/FormContainer";
import FormMainHeading from "../../../User_page/components/FormMainHeading";
import FormSubHeading from "../../../User_page/components/FormSubHeading";
import TermsText from "../../../User_page/components/TermsText";
import AccountText from "../../../User_page/components/AccountText";
import Select from "react-select";

function AdminRegister() {
  const classes = useStyles();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [adminUserInfo, setadminUserInfo] = useState([]);
  const retriveContacts = async () => {
    const response = await api.get("/adminUser");
    return response.data;
  };
  // const onSubmit = (data) => console.log(data);
  const mySubmit = async (data) => {
    console.log(data);

    const request = {
      id: uuidv4(),
      ...data,
    };

    const response = await api.post("/adminUser", request);
    console.log(response);
    setadminUserInfo([...adminUserInfo, response.data]);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setadminUserInfo(retriveContacts);

    const getContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setadminUserInfo(allContacts);
    };
    getContacts();
  }, []);

  return (
    <div className={classes.color_main_div}>
      {/* <Navbar /> */}

      <div>
        <WelcomeText />
        <FormContainer>
          <FormMainHeading>Get Started</FormMainHeading>
          <FormSubHeading>Create an account for free.</FormSubHeading>
          <form className={classes.form} onSubmit={handleSubmit(mySubmit)}>
            <div className={classes.flex_reg_div}>
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                multiline
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                {...register("firstname", {
                  required: "First Name is required",
                })}
              />
              {errors.firstname && (
                <small className={classes.small_txt}>
                  {errors.firstname.message}
                </small>
              )}
              &nbsp; &nbsp;
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                multiline
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                {...register("lastname", {
                  required: "Last Name is required",
                })}
              />
              {errors.lastname && (
                <small className={classes.small_txt}>
                  {errors.lastname.message}
                </small>
              )}
            </div>

            <div className={classes.flex_reg_div}>
              <select
                {...register("gender", {
                  required: "Please select gender",
                })}
                className={classes.select_option}
                label="Gender"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <small className={classes.small_txt}>
                  {errors.gender.message}
                </small>
              )}
              &nbsp; &nbsp;
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                multiline
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />
              {errors.phone && (
                <small className={classes.small_txt}>
                  {errors.phone.message}
                </small>
              )}
            </div>
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
            {errors.email && (
              <small className={classes.small_txt}>
                {errors.email.message}
              </small>
            )}

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
            <br />
            {errors.password && (
              <small className={classes.small_txt}>
                {errors.password.message}
              </small>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              data-toggle="modal"
            >
              Register
            </Button>
          </form>

          {/* <div>
            <FormButton type="submit">Register</FormButton>
          </div> */}
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
    </div>
  );
}

export default AdminRegister;

const useStyles = makeStyles({
  color_main_div: {
    backgroundColor: "white !important",
  },
  small_txt: {
    fontSize: 12,
    color: "red",
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
  select_option: {
    width: "100% !important",
    height: "56px !important",
    backgroundColor: "#1A2138 !important",
    borderRadius: "4px !important",
    color: "white !important",
    fontSize: "1rem !important",
    marginTop: "-6px !important",
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
