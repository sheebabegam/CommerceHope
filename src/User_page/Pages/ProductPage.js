import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import ProductCheckBox from "../components/ProductCheckBox";
import { makeStyles } from "@material-ui/styles";
import ColorRoundSidebar from "../components/ColorRoundSidebar";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductCardList from "../components/ProductCardList";
import ProductCard from "../components/ProductCard";
import All_data from "../assets/JSON_data/All_data.json";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "./Pagination";

function ProductPage(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // console.log(props);

  // const maps = All_data.find((data) => {
  //   return data.category == "women";
  // });

  // console.log("MAPSSSS", maps);

  const [view, setView] = useState("grid");

  let [page, setPage] = useState(1);
  const PER_PAGE = 8;

  const count = Math.ceil(props.All_data.length / PER_PAGE);
  const selectedUsers = usePagination(props.All_data, PER_PAGE);

  console.log("Selected USERS", selectedUsers);

  const handleChange1 = (e, p) => {
    setPage(p);
    selectedUsers.jump(p);
  };

  let Grid_prod = selectedUsers.currentData().map((card, i) => {
    return <ProductCard card={card} key={i} />;
  });

  let List_prod = selectedUsers.currentData().map((card, i) => {
    return <ProductCardList card={card} key={i} />;
  });

  return (
    <div>
      <Navbar />
      <div className={classes.whole_div} style={{ padding: "18px 200px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className={classes.sidebar_prod_page_div}>
                <div className={classes.padding_div}>
                  <div className={classes.typo_prod_page_div}>
                    <Typography
                      variant="h5"
                      className={classes.prod_page_filter_h5}
                      style={{ fontWeight: 700 }}
                    >
                      Filter
                    </Typography>
                  </div>
                  <div className={classes.padding_list_prod_page_div}>
                    <div className={classes.gen_res_flex_div}>
                      <p className={classes.gender}>Gender</p>
                      <Button>Reset</Button>
                    </div>
                    <div>
                      <ProductCheckBox label="Men"></ProductCheckBox>
                      <ProductCheckBox label="Women"></ProductCheckBox>
                      <ProductCheckBox label="Kids"></ProductCheckBox>
                      <ProductCheckBox label="Others"></ProductCheckBox>
                    </div>
                  </div>

                  <div className={classes.color_main_div}>
                    <p>Color</p>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <span className={classes.prod_page_span_round_div}>
                            <ColorRoundSidebar
                              style={{ backgroundColor: "aqua" }}
                            >
                              <span>Aqua</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "blue" }}
                            >
                              <span>Blue</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "gold" }}
                            >
                              <span>Gold</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "green" }}
                            >
                              <span>Green</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "yellow" }}
                            >
                              <span>Yellow</span>
                            </ColorRoundSidebar>
                          </span>
                        </Grid>
                        <Grid item xs={6}>
                          <span className={classes.prod_page_span_round_div}>
                            <ColorRoundSidebar
                              style={{ backgroundColor: "brown" }}
                            >
                              <span>Brown</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "grey" }}
                            >
                              <span>Grey</span>
                            </ColorRoundSidebar>

                            <ColorRoundSidebar
                              style={{ backgroundColor: "white" }}
                            >
                              <span>White</span>
                            </ColorRoundSidebar>
                          </span>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>

                  <div className={classes.color_main_div}>
                    <p>Size</p>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <ProductCheckBox label="XS"></ProductCheckBox>
                          <ProductCheckBox label="LG"></ProductCheckBox>
                          <ProductCheckBox label="XXL"></ProductCheckBox>
                        </Grid>
                        <Grid item xs={6}>
                          <ProductCheckBox label="SM"></ProductCheckBox>
                          <ProductCheckBox label="XL"></ProductCheckBox>
                          <ProductCheckBox label="Free"></ProductCheckBox>
                        </Grid>
                      </Grid>
                    </Box>
                  </div>

                  <div className={classes.color_main_div}>
                    <p>Price Range</p>
                    <div>
                      <Box sx={{ width: 300 }}>
                        <Box sx={{ m: 3 }} />
                        <AirbnbSlider
                          slots={{ thumb: AirbnbThumbComponent }}
                          getAriaLabel={(index) =>
                            index === 0 ? "Minimum price" : "Maximum price"
                          }
                          defaultValue={[0, 100]}
                        />
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={9}>
              <div>
                <div className={classes.heading_flex_div_main}>
                  <div>
                    <p>Showing 1-12 of 112 items</p>
                  </div>
                  <div className={classes.menu_flex_div}>
                    <div>
                      <Button
                        className={classes.button_horiz}
                        onClick={() => setView("grid")}
                      >
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="TuneRoundedIcon"
                          fill="rgb(145, 158, 171)"
                          height="30px"
                          width="30px"
                        >
                          <path d="M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1zM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1zM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z"></path>
                        </svg>
                      </Button>
                    </div>
                    <div>
                      <Button onClick={() => setView("list")}>
                        <svg
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ViewListRoundedIcon"
                          fill="rgb(145, 158, 171)"
                          height="30px"
                          width="30px"
                        >
                          <path d="M4 14h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0 5h2c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zM4 9h2c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm5 5h11c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zm0 5h11c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1zM8 6v2c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1z"></path>
                        </svg>
                      </Button>
                    </div>
                    <div>
                      <FormControl
                        sx={{ m: 1, minWidth: 120 }}
                        style={{ color: "white" }}
                      >
                        <Select
                          value={age}
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          style={{ color: "white" }}
                        >
                          <MenuItem value="">
                            <span style={{ fontSize: 20 }}>Top rated</span>
                          </MenuItem>
                          <MenuItem value={10}>Asceding</MenuItem>
                          <MenuItem value={20}>Deceding</MenuItem>
                          <MenuItem value={30}>Price, low - high</MenuItem>
                          <MenuItem value={30}>Price, low - high</MenuItem>
                          <MenuItem value={30}>Price, high - low</MenuItem>
                          <MenuItem value={30}>Oldest</MenuItem>
                          <MenuItem value={30}>Newest</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div>
                  {view === "grid" && (
                    <Grid
                      container
                      spacing={2}
                      className={classes.grid_padding}
                    >
                      {Grid_prod}
                    </Grid>
                  )}

                  {view === "list" && <div>{List_prod}</div>}
                </div>
              </div>
              {/* <div>
                <div className={classes.pagination_flex_div}>
                  <Button onClick={getPrevious}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-k2nkbn"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="NavigateBeforeIcon"
                      height={22}
                      width={22}
                      fill="white"
                    >
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    </svg>
                  </Button>
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                  <Button onClick={getNext}>
                    <svg
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiPaginationItem-icon css-k2nkbn"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="NavigateNextIcon"
                      height={22}
                      width={22}
                      fill="white"
                    >
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    </svg>
                  </Button>
                </div>
              </div> */}
              <div className={classes.pagination_flex_div}>
                <Stack spacing={2} style={{ color: "white" }}>
                  <Pagination
                    classes={{ ul: classes.ul }}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    count={count}
                    size="large"
                    page={page}
                    onChange={handleChange1}
                    style={{ color: "white" }}
                    inputProps={{ color: "white" }}
                  />
                </Stack>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default ProductPage;

const useStyles = makeStyles({
  whole_div: {
    backgroundColor: "#1A2138 !important",
  },
  padding_div: {
    // padding: 20,
  },
  gen_res_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sidebar_prod_page_div: {
    backgroundColor: "#1A2138",
    color: "#fff",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "4px",
    boxShadow: "none",
    backgroundImage:
      "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))",
    backgroundImage: "none",
    overflow: "hidden",
    position: "relative",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24)",
    transition: "all ease-in-out 0.3s",
    maxWidth: "100%",
    position: "-webkit-sticky",
    position: "sticky",
    top: "81px",
    marginTop: "16px",
    marginBottom: "16px",
  },
  prod_page_filter_h5: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
    fontSize: "1.7rem !important",
  },
  padding_list_prod_page_div: {
    padding: 16,
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
  },
  gender: {
    fontSize: 20,
  },
  color_span1: {
    borderRadius: "50% !important",
    width: "21.6px !important",
    height: "21.6px !important",
    border: "2px solid rgb(26, 33, 56) !important",
    boxShadow: "rgb(0 0 0 / 24%) -1px 1px 2px inset !important",
    backgroundColor: "aqua !important",
  },
  color_main_div: {
    padding: "16px",
    borderBottom: "1px solid rgba(145, 158, 171, 0.24)",
  },
  heading_flex_div_main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  menu_flex_div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button_horiz: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    outline: "0px",
    border: "0px",
    margin: "0px",
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    appearance: "none",
    textDecoration: "none",
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: "1.5rem",
    padding: "8px",
    borderRadius: "50%",
    overflow: "visible",
    color: "rgb(145, 158, 171) !important",
    transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
  pagination_flex_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      border: "1px solid gray",
      height: 30,
    },
  },
});

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "rgb(0, 125, 252) !important",
  marginLeft: 8,
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 33,
    width: 33,
    backgroundColor: "#fff",
    border: "1px solid rgb(0, 125, 252) !important",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "rgb(0, 125, 252) !important",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));
