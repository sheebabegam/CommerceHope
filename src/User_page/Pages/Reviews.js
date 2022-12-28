import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import star from "../assets/images/star.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Reviews(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{
          padding: 10,
          // border: "1px solid rgba(145, 158, 171, 0.24)",
          // marginTop: 50,
        }}
      >
        <Grid item xs={4}>
          <div className={classes.flex_div}>
            <div className={classes.padding_avg_rating_div}>
              <Typography variant="h6" className={classes.average_rating}>
                Average Rating
              </Typography>
              <Typography
                variant="h2"
                className={classes.rating_no}
                style={{ fontWeight: 700 }}
              >
                5.0
              </Typography>
              <div className={classes.star_flex_div1}>
                <img src={star} alt="star" className={classes.star_img} />
                <img src={star} alt="star" className={classes.star_img} />
                <img src={star} alt="star" className={classes.star_img} />
                <img src={star} alt="star" className={classes.star_img} />
                <img src={star} alt="star" className={classes.star_img} />
              </div>
              <p className={classes.reviews_prod}>(4 reviews)</p>
            </div>
          </div>
          <div className={classes.review_btn_div} style={{ padding: 24 }}>
            <Button
              className={classes.write_review_btn}
              style={{ fontWeight: 700 }}
            >
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="EditRoundedIcon"
                fill="rgba(0, 125, 252, 0.5)"
                height={20}
                width={20}
              >
                <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
              </svg>
              &nbsp; Write Your Review
            </Button>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={classes.review_first_div}>
            <div style={{ padding: "0px 20px" }}>
              <div>
                <Grid container spacing={2} style={{ padding: 10 }}>
                  <Grid item xs={2}>
                    <div className={classes.reviewer_img_div}>
                      <img
                        src="https://res.cloudinary.com/techgater/image/upload/v1669279122/my-uploads/dfnylsuotuhwex7jkt1h.jpg"
                        alt="img"
                        className={classes.reviewer_img}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="h6"
                      className={classes.name_typo}
                      style={{ fontWeight: 600 }}
                    >
                      Kamran Haider
                    </Typography>
                    <Typography
                      variant="h6"
                      className={classes.great_typo}
                      style={{ fontWeight: 400 }}
                    >
                      Great Product
                    </Typography>
                    <div className={classes.star_review_div}>
                      <div className={classes.star_flex_div}>
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <p className={classes.november_para}>28 November 2022</p>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.reviewbag_div}>
                <img
                  src="https://app.commercehope.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Ftechgater%2Fimage%2Fupload%2Fv1669635075%2Fmy-uploads%2Fcuwzknw8q8rcseuakjba.avif&w=1920&q=75"
                  alt="image"
                  className={classes.review_bag}
                />
              </div>
            </div>
          </div>
          <div className={classes.review_first_div}>
            <div style={{ padding: "10px 20px" }}>
              <div style={{ marginBottom: 30 }}>
                <Grid container spacing={2} style={{ padding: 10 }}>
                  <Grid item xs={2}>
                    <div className={classes.reviewer_img_div}>
                      <img
                        src="https://res.cloudinary.com/techgater/image/upload/v1669279122/my-uploads/dfnylsuotuhwex7jkt1h.jpg"
                        alt="img"
                        className={classes.reviewer_img}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="h6"
                      className={classes.name_typo}
                      style={{ fontWeight: 600 }}
                    >
                      Kamran Haider
                    </Typography>
                    <Typography
                      variant="h6"
                      className={classes.great_typo}
                      style={{ fontWeight: 400 }}
                    >
                      adasd
                    </Typography>
                    <div className={classes.star_review_div}>
                      <div className={classes.star_flex_div}>
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <p className={classes.november_para}>28 November 2022</p>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classes.review_first_div}>
            <div style={{ padding: "10px 20px" }}>
              <div style={{ marginBottom: 30 }}>
                <Grid container spacing={2} style={{ padding: 10 }}>
                  <Grid item xs={2}>
                    <div className={classes.reviewer_user_icon_div}>
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-pz2598"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PersonIcon"
                        height={52}
                        width={52}
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="h6"
                      className={classes.name_typo}
                      style={{ fontWeight: 600 }}
                    >
                      Amir Sultan
                    </Typography>
                    <Typography
                      variant="h6"
                      className={classes.great_typo}
                      style={{ fontWeight: 400 }}
                    >
                      adasd
                    </Typography>
                    <div className={classes.star_review_div}>
                      <div className={classes.star_flex_div}>
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <p className={classes.november_para}>28 November 2022</p>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classes.review_last_div}>
            <div style={{ padding: "10px 20px" }}>
              <div style={{ marginBottom: 30 }}>
                <Grid container spacing={2} style={{ padding: 10 }}>
                  <Grid item xs={2}>
                    <div className={classes.reviewer_user_icon_div}>
                      <svg
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-pz2598"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="PersonIcon"
                        height={52}
                        width={52}
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>
                    </div>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="h6"
                      className={classes.name_typo}
                      style={{ fontWeight: 600 }}
                    >
                      Amir Sultan
                    </Typography>
                    <Typography
                      variant="h6"
                      className={classes.great_typo}
                      style={{ fontWeight: 400 }}
                    >
                      Great Product!
                    </Typography>
                    <div className={classes.star_review_div}>
                      <div className={classes.star_flex_div}>
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                        <img
                          src={star}
                          alt="star"
                          className={classes.star_img1}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <p className={classes.november_para}>28 November 2022</p>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Reviews;

const useStyles = makeStyles({
  average_rating: {
    margin: "0px 0px 8px",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "1rem",
    fontFamily: "Montserrat",
    color: "white",
  },
  rating_no: {
    margin: "0px 0px 8px",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "1rem",
    fontFamily: "Montserrat",
    color: "rgb(255, 72, 66)",
  },
  reviews_prod: {
    margin: "10px",
    lineHeight: 1.57143,
    fontFamily: "Montserrat",
    fontSize: "0.75rem",
    fontWeight: 400,
    color: "rgb(145, 158, 171)",
  },
  flex_div: {
    textAlign: "center",
    padding: "0px !important",
    margin: "0px !important",
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
    borderRight: "1px solid rgba(145, 158, 171, 0.24)",
    marginLeft: "-34px !important",
    marginTop: "-10px !important",
  },
  star_flex_div1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  write_review_btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    outline: "0px",
    margin: "0px",
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    textDecoration: "none",
    fontWeight: 700,
    lineHeight: "1.71429 !important",
    fontSize: "0.9375rem !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    minWidth: "64px !important",
    padding: "7px 21px !important",
    borderRadius: "4px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    border: "1px solid rgba(0, 125, 252, 0.5) !important",
    color: "rgb(0, 125, 252) !important",
    height: "48px !important",
  },
  review_btn_div: {
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    borderRight: "1px solid rgba(145, 158, 171, 0.24)",
    height: 433,
  },
  reviewer_user_icon_div: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontFamily: "Montserrat",
    fontSize: "1.25rem",
    lineHeight: 1,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none",
    color: "rgb(26, 33, 56)",
    backgroundColor: "rgb(99, 115, 129)",
    width: "64px",
    height: "64px",
  },
  reviewer_img: {
    height: 64,
    width: 64,
    borderRadius: "50%",
  },
  star_img: {
    height: "18px",
    width: "18px",
    marginRight: 3,
  },
  star_img1: {
    height: "14px",
    width: "14px",
    marginRight: 3,
  },
  november_para: {
    margin: "0px",
    lineHeight: 1.5,
    fontSize: "0.625rem",
    fontFamily: "Montserrat",
    fontWeight: 400,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "rgb(145, 158, 171)",
    float: "right",
  },
  name_typo: {
    margin: "0px !important",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "1rem !important",
    fontFamily: "Montserrat !important",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "white",
  },
  great_typo: {
    margin: "4px 0px 8px !important",
    lineHeight: 1.57143,
    fontSize: "0.875rem !important",
    fontFamily: "Montserrat !important",
    fontWeight: 400,
    color: "white",
  },
  review_bag: {
    height: "90px",
    width: "100px",
    borderRadius: "8px",
  },
  review_first_div: {
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
    marginLeft: "-16px",
    marginRight: "-33.8px",
  },
  review_last_div: {
    marginLeft: "-16px",
    marginRight: "-33.8px",
  },
  reviewbag_div: {
    marginBottom: 30,
  },
  padding_avg_rating_div: {
    padding: "20px 0px !important",
  },
});
