import React from "react";
import { makeStyles } from "@material-ui/styles";

function Description(props) {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.desc_para} style={{ fontWeight: 700 }}>
        Product details of Bag X Luxury 3 piece set Women's Cross Body &
        Shoulder Bag - hand bag for girls , bags for girls , Bags for women
      </p>
    </div>
  );
}

export default Description;

const useStyles = makeStyles({
  desc_para: {
    color: "white",
    fontSize: 22,
  },
});
