import React from "react";
import { makeStyles } from "@material-ui/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function ProductCheckBox(props) {
  const classes = useStyles();
  const { label } = props;
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox style={{ color: "grey" }} />}
        label={label}
        className={classes.check_box}
      />
    </FormGroup>
  );
}

export default ProductCheckBox;

const useStyles = makeStyles({
  fontSize: 18,
  color: "white",
});
