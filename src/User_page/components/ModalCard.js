import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@mui/material/Typography";

function ModalCard(props) {
  const classes = useStyles();
  const { src, children } = props;
  return (
    <div className={classes.modal_design_div}>
      <div className={classes.modal_flex_div}>
        <div>
          <img src={src} alt="img" className={classes.image_modal_round} />
        </div>
        <div>
          <Typography
            variant="h6"
            className={classes.modal_prod_name}
            style={{
              fontWeight: 600,
              textOverflow: "ellipsis",
              width: 465,
            }}
          >
            {children}
          </Typography>
          <p className={classes.modal_para_txt} style={{ fontWeight: 400 }}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalCard;

const useStyles = makeStyles({
  whole_div: {
    backgroundColor: "#1A2138 !important",
  },
  image_modal_round: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    marginRight: 20,
  },
  modal_prod_name: {
    margin: "0px",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "1rem !important",
    fontFamily: "Montserrat !important",
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",
    whiteSpace: "nowrap !important",
    color: "rgb(255, 255, 255) !important",
  },
  modal_para_txt: {
    margin: "0px",
    lineHeight: 1.57143,
    fontFamily: "Montserrat !important",
    fontSize: "0.75rem !important",
    fontWeight: 400,
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",
    whiteSpace: "nowrap !important",
    color: "rgb(145, 158, 171) !important",
  },
  modal_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal_design_div: {
    backgroundColor: "rgb(26, 33, 56) !important",
    color: "rgb(255, 255, 255) !important",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    borderRadius: "4px !important",
    backgroundImage: "none !important",
    margin: "15px !important",
    position: "relative !important",
    overflowY: "auto !important",
    display: "flex !important",
    maxHeight: "calc(100% - 64px) !important",
    maxWidth: "600px !important",
  },
});
