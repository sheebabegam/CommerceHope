import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function WarrentyCard(props) {
  const classes = useStyles();
  const { style, children } = props;
  return (
    <div>
      <Grid item xs={12} sm={4}>
        <div className={classes.svg_main_div}>
          <div className={classes.svg_second_main_div}>
            <div className={classes.svg_div_prod_det}>{children}</div>
          </div>
          <div>
            <Typography variant="h6" className={classes.original_txt_typo}>
              {children}
            </Typography>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default WarrentyCard;

const useStyles = makeStyles({});
