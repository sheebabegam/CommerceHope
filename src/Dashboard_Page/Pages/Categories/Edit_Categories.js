import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import "../style.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdminDashboard from "../DashboardLayout/AdminDashboard";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MonochromePhotosIcon from "@mui/icons-material/MonochromePhotos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const drawerWidth = 240;
function Edit_Categories(props) {
  const classes = useStyles();
  const [imageUpload, setImageUpload] = useState();

  const location = useLocation();

  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <div>
      <form>
        <AdminDashboard />
        <div className={classes.breadcrumb}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <div>
              <Typography variant="h6">Dashboard</Typography>
            </div>
            <br />
            <Divider sx={{ marginLeft: "-36px", marginRight: "-267px" }} />
          </Box>
        </div>
        <div style={{ marginTop: 50 }}>
          <Box style={{ marinLeft: "262px" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={9}
                style={{
                  marginRight: 30,
                  maxWidth: "48.5%",
                  minWidth: "55%",
                  height: 400,
                }}
                className={classes.edit_categ_grid}
              >
                <div>
                  <div>
                    <Typography
                      variant="h6"
                      className={classes.name_typo}
                      style={{ fontWeight: 600 }}
                    >
                      Name
                      {/* <Textarea minRows={2} /> */}
                    </Typography>
                    <div style={{ width: "98%" }}>
                      <CssTextField
                        className={classes.input_box}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        name="name"
                        multiline
                        inputProps={{ style: { color: "black" } }}
                        InputLabelProps={{
                          style: {
                            border: "1px solid rgba(145, 158, 171, 0.24)",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <Typography
                      variant="h6"
                      className={classes.name_typo}
                      style={{ fontWeight: 600 }}
                    >
                      Description
                      {/*  */}
                    </Typography>
                    <div style={{ width: "98%" }}>
                      <TextareaAutosize
                        rows={30}
                        // value={text}
                        // onChange={handleChange}
                        className={classes.textareas}
                      />
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  maxWidth: "28%",
                  minWidth: "28%",
                }}
                className={classes.edit_categ_grid}
              >
                <div>
                  <Typography
                    variant="h6"
                    className={classes.name_typo}
                    style={{ fontWeight: 600 }}
                  >
                    Parent Category
                    {/* <Textarea minRows={2} /> */}
                  </Typography>

                  <div>
                    <FormControl
                      sx={{ m: 1, minWidth: "95%", height: "70px !important" }}
                      style={{ color: "white", height: "70px !important" }}
                      inputProps={{ style: { height: "70px !important" } }}
                    >
                      <Select
                        //   value={age}
                        //   onChange={handleChange}
                        // displayEmpty
                        inputProps={{ style: { height: "70px" } }}
                        style={{ height: "55px" }}
                      >
                        <MenuItem value={10}>Bags</MenuItem>
                        <MenuItem value={20}>Shoes</MenuItem>
                        <MenuItem value={30}>Shirts</MenuItem>
                        <MenuItem value={30}>Makeup</MenuItem>
                        <MenuItem value={30}>Sports</MenuItem>
                        <MenuItem value={30}>Electronics</MenuItem>
                        <MenuItem value={30}>Home Appliances</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div>
                  <Typography
                    variant="h6"
                    className={classes.name_typo}
                    style={{ fontWeight: 600 }}
                  >
                    Image
                  </Typography>

                  <div>
                    <Button>
                      <div className="loaded_img_sec">
                        <img
                          name="photo"
                          src={
                            imageUpload ? (
                              URL.createObjectURL(imageUpload)
                            ) : (
                              <AccountCircleIcon />
                            )
                          }
                          alt={imageUpload ? imageUpload.name : null}
                          style={{ height: 227, width: "100%" }}
                        />

                        <div>
                          <label
                            for="icon_img"
                            style={{
                              fontSize: "20px",
                            }}
                            className="button"
                          >
                            <MonochromePhotosIcon
                              style={{
                                height: 300,
                                width: 300,
                                cursor: "pointer",
                                marginTop: "-270px",
                                //   display: "none",
                                //   visibility: "hidden",
                              }}
                            />
                          </label>
                          <input
                            type="file"
                            id="icon_img"
                            onChange={(e) => {
                              setImageUpload(e.target.files[0]);
                            }}
                            name="photo"
                            style={{ display: "none", visibility: "none" }}
                          />
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>

        <div style={{ marginTop: 50 }}>
          <Box style={{ marinLeft: "262px" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={9}
                style={{
                  marginRight: 30,
                  maxWidth: "48.5%",
                  minWidth: "55%",
                  height: 400,
                }}
              ></Grid>
              <Grid
                item
                xs={3}
                style={{
                  maxWidth: "28%",
                  minWidth: "28%",
                }}
              >
                <Button
                  variant="contained"
                  className={classes.edit_categ_btn}
                  style={{ fontWeight: 700 }}
                >
                  Edit Category
                </Button>
              </Grid>
            </Grid>
          </Box>
        </div>
      </form>
    </div>
  );
}

Edit_Categories.propTypes = {
  window: PropTypes.func,
};

export default Edit_Categories;

const useStyles = makeStyles({
  breadcrumb: {
    marginLeft: 250,
  },
  subtotal_div: {
    // backgroundColor: "rgb(26, 33, 56) !important",
    color: "rgb(255, 255, 255) !important",
    borderRadius: "4px !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    position: "relative !important",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    transition: "all 0.3s ease-in-out 0s !important",
    marginBottom: "24px !important",
  },
  product_name_typo: {
    margin: "0px 0px 4px !important",
    fontWeight: 600,
    lineHeight: 1.57143,
    fontSize: "0.875rem !important",
    fontFamily: "Montserrat !important",
    overflow: "hidden !important",
    textOverflow: "ellipsis !important",
    whiteSpace: "nowrap !important",
    maxWidth: "300px !important",
    color: "black !important",
  },
  span_para: {
    margin: "0px !important",
    lineGeight: 1.57143,
    fontFamily: "Montserrat !important",
    fontSize: "0.75rem !important",
    fontWeight: 400,
    color: "rgb(145, 158, 171) !important",
  },
  map_text_color: {
    color: "black !important",
    fontSize: "16px !important",
  },
  edit_categ_grid: {
    backgroundColor: "rgb(255, 255, 255) !important",
    color: "rgb(33, 43, 54) !important",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    boxShadow: "none !important",
    backgroundImage: "none !important",
    overflow: "hidden !important",
    borderRadius: "8px !important",
    position: "relative !important",
    zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    paddingBottom: "12px !important",
  },
  name_typo: {
    margin: "0px 0px 8px !important",
    fontWeight: 600,
    lineHeight: 1.57143,
    fontSize: "0.875rem !important",
    fontFamily: "Montserrat !important",
    color: "rgb(99, 115, 129) !important",
  },
  textareas: {
    overflow: "hidden !important",
    width: "100% !important",
    height: "208px !important",
    borderRadius: "4px !important",
    borderColor: "rgba(145, 158, 171, 0.24) !important",
  },
  input_box: {
    overflow: "hidden !important",
    width: "100% !important",
    // height: "208px !important",
    borderRadius: "4px !important",
    borderColor: "rgba(145, 158, 171, 0.24) !important",
  },
  edit_categ_btn: {
    display: "inline-flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    position: "relative !important",
    boxSizing: "border-box !important",
    outline: "0px !important",
    border: "0px !important",
    margin: "0px !important",
    cursor: "pointer !important",
    userSelect: "none !important",
    verticalAlign: "middle !important",
    appearance: "none !important",
    textDecoration: "none !important",
    fontWeight: 700,
    lineHeight: 1.71429,
    fontSize: "0.9375rem !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    minWidth: "64px !important",
    padding: "8px 22px !important",
    borderRadius: "3px !important",
    color: "rgb(255, 255, 255) !important",
    backgroundColor: "rgb(0, 125, 252) !important",
    width: "100% !important",
    boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
    height: "48px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
  },
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgba(145, 158, 171, 0.24) !important",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgba(145, 158, 171, 0.24)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(145, 158, 171, 0.24)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(145, 158, 171, 0.24)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(145, 158, 171, 0.24)",
    },
  },
  fontFamily: "Montserrat !important",
  height: "70px !important",
});

// **********************************************************************
