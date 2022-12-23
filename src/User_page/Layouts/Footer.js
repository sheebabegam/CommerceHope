import React from "react";
import { Paper, Button, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import Grid from "@mui/material/Grid";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

function Footer(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.news_flex_div}>
        <div className={classes.news_wholediv}>
          <div className={classes.form_div}>
            <div className={classes.letter_div}>
              <Typography variant="contained" className={classes.news_letter}>
                Join newsletter
              </Typography>
            </div>
            <div style={{ marginBottom: 50 }}>
              <FormControl
                sx={{
                  width: "700px",
                  height: "80px",
                  marginBottom: 50,
                  color: "white",
                  border: "1px solid white",
                }}
                inputProps={{ style: { color: "white" } }}
                style={{ borderColor: "white" }}
                className={classes.inputbox_footer}
              >
                <OutlinedInput
                  inputProps={{ style: { borderColor: "white" } }}
                  style={{ borderColor: "white" }}
                  sx={{
                    width: "700px",
                    height: "80px",

                    color: "white",
                    border: "1px solid white",
                  }}
                  endAdornment={
                    <Button
                      position="end"
                      style={{ color: "white", fontWeight: 700 }}
                      className={classes.button_form}
                    >
                      Subscribe
                    </Button>
                  }
                />
                <MyFormHelperText className={classes.email_req} />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(44 53 78)" }}>
        <div className={classes.footer_main_div1}>
          <Box sx={{ flexGrow: 1 }} className={classes.footer_main_div}>
            <Grid container spacing={1} className={classes.grid_back_color}>
              <Grid item xs={2.5} className={classes.grid_back_color}>
                <div>
                  <div className={classes.commercehope_logo_div}>
                    <div>
                      <svg
                        class="MuiBox-root css-10x59zd"
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 270.000000 279.000000"
                        preserveAspectRatio="xMidYMid meet"
                        width={55}
                        height={55}
                      >
                        <g
                          transform="translate(0.000000,279.000000) scale(0.100000,-0.100000)"
                          fill="#fff"
                          stroke="none"
                        >
                          <path d="M1306 2650 c-471 -60 -874 -387 -1034 -842 -123 -346 -84 -739 103 -1058 125 -212 302 -378 525 -490 279 -140 576 -172 878 -96 235 60 437 178 603 353 103 108 230 299 212 317 -4 3 -19 6 -34 6 -15 0 -56 9 -91 20 -60 19 -64 19 -76 3 -7 -10 -39 -54 -71 -98 -383 -527 -1147 -583 -1607 -118 -272 275 -372 684 -259 1060 98 323 361 593 680 696 197 64 404 70 609 17 92 -23 238 -90 327 -150 87 -58 213 -188 278 -285 30 -44 59 -79 65 -78 21 5 181 48 185 50 2 1 -9 24 -24 50 -191 331 -496 552 -862 628 -92 19 -311 27 -407 15z"></path>
                          <path
                            fill="#007DFC"
                            d="M1317 2225 c-664 -126 -923 -927 -458 -1419 211 -222 536 -311 836 -229 208 57 400 204 505 388 l23 41 -46 62 c-72 98 -92 170 -92 332 0 156 14 204 92 317 l44 65 -33 56 c-46 77 -168 204 -249 258 -77 51 -186 98 -274 120 -92 22 -257 26 -348 9z m328 -292 c83 -21 182 -75 238 -130 26 -25 47 -49 47 -52 0 -7 -119 -116 -167 -154 -23 -19 -24 -19 -63 17 -72 65 -114 81 -215 81 -74 0 -98 -4 -138 -24 -104 -51 -161 -146 -161 -271 -1 -89 21 -160 65 -213 106 -129 319 -135 453 -12 l38 35 94 -87 c52 -47 94 -89 94 -94 0 -17 -116 -111 -173 -139 -118 -57 -295 -76 -440 -45 -248 52 -424 252 -444 503 -27 356 261 630 637 605 41 -2 102 -11 135 -20z"
                          ></path>
                          <path d="M2575 1682 c-77 -33 -77 -33 -66 -83 19 -80 24 -239 11 -334 -7 -49 -13 -99 -14 -109 -1 -26 75 -64 139 -68 l49 -3 14 55 c19 75 22 390 4 488 l-14 72 -41 -1 c-23 0 -60 -8 -82 -17z"></path>
                        </g>
                      </svg>
                    </div>
                    <div style={{ marginTop: "-10px" }}>
                      <Typography
                        variant="h5"
                        className={classes.commhope_h5}
                        style={{ fontWeight: 750 }}
                      >
                        COMMERCEHOPE
                      </Typography>
                      <p className={classes.small_txt}>
                        Reactjs ecommerce script you need
                      </p>
                    </div>
                  </div>
                  <p className={classes.pak}>
                    Rattokala, PO Khas Tehsil Bhalwal Sargodha, Pakistan
                  </p>
                  <div className={classes.mail_footer}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1bkwoc0"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="EmailRoundedIcon"
                      height={25}
                      width={25}
                      fill="rgb(145, 158, 171)"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
                    </svg>{" "}
                    &nbsp;
                    <span>
                      <a
                        href="mailto:info@commercehope.com"
                        className={classes.info_link}
                      >
                        info@commercehope.com
                      </a>
                    </span>
                  </div>

                  <div className={classes.mail_footer}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1bkwoc0"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="LocalPhoneRoundedIcon"
                      height={25}
                      width={25}
                      fill="rgb(145, 158, 171)"
                    >
                      <path d="m19.23 15.26-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
                    </svg>{" "}
                    &nbsp;
                    <a href="tel:+923035501602" className={classes.info_link}>
                      +923035501602
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div>
                  <Typography
                    variant="h6"
                    className={classes.heading_color_footer}
                  >
                    Product
                  </Typography>
                </div>
                <div className={classes.heading_color_footer}>
                  <p>Application</p>
                  <p>Features</p>
                  <p>Requirement</p>
                  <p>Technology</p>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div>
                  <Typography
                    variant="h6"
                    className={classes.heading_color_footer}
                  >
                    Resources
                  </Typography>
                </div>
                <div className={classes.heading_color_footer}>
                  <p>Changelog</p>
                  <p>Updates</p>
                  <p>Providers</p>
                  <p>Affiliat</p>
                  <p>Roadmap</p>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div>
                  <Typography
                    variant="h6"
                    className={classes.heading_color_footer}
                  >
                    Company
                  </Typography>
                </div>
                <div className={classes.heading_color_footer}>
                  <p>Blog</p>
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Jobs</p>
                  <p>Team</p>
                </div>
              </Grid>
              <Grid item xs={2}>
                <div>
                  <Typography
                    variant="h6"
                    className={classes.heading_color_footer}
                  >
                    Follow Us
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
  const classes = useStyles();
  const helperText = React.useMemo(() => {
    if (focused) {
      return "Email required";
    }

    return "";
  }, [focused]);

  return (
    <FormHelperText
      style={{
        color: "white",
        marginLeft: 300,
        marginTop: 5,
        fontFamily: "Montserrat",
        fontSize: 13,
        fontWeight: 400,
      }}
    >
      {helperText}
    </FormHelperText>
  );
}

export default Footer;

const useStyles = makeStyles({
  news_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(rgb(26, 33, 56) 0%, rgb(26, 33, 56) 50%, rgb(44, 53, 78) 50%, rgb(44, 53, 78) 100%) !important",
  },
  news_letter: {
    fontSize: " 4rem !important",
    margin: " 0px !important",
    lineHeight: " 1.33333 !important",
    fontFamily: " Montserrat !important",
    textAlign: " center !important",
    textTransform: " uppercase !important",
    color: "rgb(255, 255, 255) !important",
    fontWeight: 700,
  },
  email_req: {
    marginLeft: 300,
    color: "white",
  },
  commercehope_logo_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    fontFamily: "Montserrat !important",
  },
  form_div: {
    display: " flex  !important",
    flexDirection: " column !important",
    padding: " 50px 16px !important",
    borderRadius: " 16px !important",
    background:
      "linear-gradient(to right bottom, rgb(0, 125, 252), rgb(1, 71, 140) 120%) !important",
  },
  footer_main_div: {
    backgroundColor: "rgb(44 53 78)",
    marginTop: 56,
  },
  commhope_h5: {
    fontSize: "1.6rem",
    color: "#fff",
    lineHeight: 1,
    textAlign: "left",
    padding: "0px",
    marginLeft: "10px !important",
    fontFamily: "Montserrat !important",
  },
  small_txt: {
    margin: "0px !important",
    fontFamily: " Montserrat !important",
    textTransform: "uppercase !important",
    fontSize: "10.5px !important",
    marginRight: "3px !important",
    paddingLeft: "11px !important",
    marginTop: "-2px !important",
    color: "white",
  },
  grid_back_color: {
    backgroundColor: "rgb(44 53 78)",
  },
  button_form: {
    display: " inline-flex !important",
    alignItems: " center !important",
    justifyContent: " center !important",
    position: " relative !important",
    boxSizing: " border-box !important",
    outline: " 0px!important",
    border: " 0px currentcolor !important",
    margin: " 0px 8px 0px 0px !important",
    cursor: " pointer !important",
    userSelect: " none !important",
    verticalAlign: " middle !important",
    appearance: " none !important",
    textDecoration: " none !important",
    fontWeight: " 700 !important",
    lineHeight: " 1.71429 !important",
    fontSize: " 16px !important",
    textTransform: " capitalize !important",
    fontFamily: " Montserrat !important",
    minWidth: " 64px !important",
    padding: " 5px 18px !important",
    borderRadius: " 4px !important",
    boxShadow: " rgb(0 0 0 / 24%) 0px 8px 16px 0px !important",
    transition:
      " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    backgroundColor: " rgb(255, 255, 255) !important",
    color: " rgb(0, 0, 0) !important",
  },
  pak: {
    color: "white",
    textAlign: "start",
  },
  info_link: {
    textDecoration: "none",
    color: "white",
  },
  mail_footer: {
    textAlign: "start",
  },
  heading_color_footer: {
    color: "white",
    textAlign: "start",
  },
  footer_main_div1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 225,
  },
  news_wholediv: {
    flexBasis: "66.6667% !important",
    flexGrow: 0,
    // width: "65%",
    maxWidth: " 100% !important",
    boxSizing: " border-box !important",
    margin: " 0px !important",
    transition: " box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    borderRadius: " 4px !important",
    boxShadow: " none !important",
    marginTop: " 96px !important",
    paddingBottom: " 16px !important",
    color: "rgb(255, 255, 255) !important",
    background:
      "linear-gradient(rgb(26, 33, 56) 0%, rgb(26, 33, 56) 50%, rgb(44, 53, 78) 50%, rgb(44, 53, 78) 100%) !important",
  },
  inputbox_footer: {
    font: " inherit !important",
    letterSpacing: " inherit !important",
    color: " currentcolor !important",
    border: " 0px !important",
    boxSizing: " content-box !important",
    background: " none !important",
    height: " 1.4375em !important",
    margin: " 0px !important",
    display: " block !important",
    minWidth: " 0px !important",
    width: " 100% !important",
    padding: " 16.5px 0px 16.5px 14px !important",
  },
});
