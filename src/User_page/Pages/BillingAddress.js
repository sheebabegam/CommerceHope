import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import "./style.css";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import CountryNames from "../assets/JSON_data/CountryNames.json";
import { styled } from "@mui/material/styles";

function BillingAddress(props) {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div style={{ width: 707 }} className={classes.margin_line}>
        <form className={classes.form} style={{ padding: 20 }}>
          {/* onSubmit={handleSubmit(mySubmit)} */}
          <div>
            <Typography variant="h4">Guest Information</Typography>
          </div>
          <div>
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
              &nbsp; &nbsp; &nbsp;
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
              &nbsp; &nbsp; &nbsp;
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

            <div className={classes.flex_reg_div}>
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                multiline
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                {...register("address", {
                  required: "Address is required",
                })}
              />
              {errors.address && (
                <small className={classes.small_txt}>
                  {errors.firstname.message}
                </small>
              )}
            </div>

            <div className={classes.flex_reg_div}>
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="town"
                label="Town/City"
                name="town"
                multiline
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                {...register("town", {
                  required: "Town/City is required",
                })}
              />
              {errors.town && (
                <small className={classes.small_txt}>
                  {errors.town.message}
                </small>
              )}
              &nbsp; &nbsp; &nbsp;
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="state"
                label="State"
                name="state"
                multiline
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                {...register("state", {
                  required: "State is required",
                })}
              />
              {errors.state && (
                <small className={classes.small_txt}>
                  {errors.state.message}
                </small>
              )}
              &nbsp; &nbsp; &nbsp;
              <CssTextField
                className={classes.fields}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="zip"
                label="Zip/Postal Code"
                name="zip"
                multiline
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                {...register("zip", {
                  required: "Last Name is required",
                })}
              />
              {errors.zip && (
                <small className={classes.small_txt}>
                  {errors.zip.message}
                </small>
              )}
            </div>

            <div className={classes.flex_reg_div}>
              <select
                {...register("country", {
                  required: "Please select country",
                })}
                className={classes.select_option}
                label="Country"
              >
                {CountryNames.map((name, i) => (
                  <option value={name.country}>{name.country}</option>
                ))}
              </select>
              {errors.country && (
                <small className={classes.small_txt}>
                  {errors.country.message}
                </small>
              )}
            </div>
            <br />

            <div>
              {/* style={{ marginBottom: 20 }} */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                data-toggle="modal"
              >
                Deliver to this Address
              </Button>
            </div>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BillingAddress;

const useStyles = makeStyles({
  margin_line: {
    width: "707px !important",
    backgroundColor: "rgb(26, 33, 56) !important",
    color: "rgb(255, 255, 255) !important",
    borderRadius: "4px !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    position: "relative !important",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    transition: "all 0.3s ease-in-out 0s !important",
    marginRight: "60px !important",
  },
  flex_reg_div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  small_txt: {
    fontSize: 12,
    color: "red",
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
