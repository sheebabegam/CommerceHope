import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const ReusableInput = (props) => {
  const classes = useStyles();
  const { onChange, label, name, value, InputProps } = props;
  return (
    <CssTextField
      className={classes.fields}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      type="text"
      label={label}
      name={name}
      style={{ fontFamily: "Montserrat", height: 70, color: "white" }}
      InputProps={InputProps}
      InputLabelProps={{
        style: {
          color: "white",
          fontFamily: "Montserrat",
        },
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default ReusableInput;

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

const useStyles = makeStyles({});
