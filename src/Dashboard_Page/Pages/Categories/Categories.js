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
import { Link } from "react-router-dom";
import axios from "axios";

const drawerWidth = 240;
function Categories(props) {
  const classes = useStyles();

  const location = useLocation();

  // console.log(location.state.items);

  const [categData, setCategData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4000/adminCategory`).then((response) => {
      setCategData(response.data);
    });
  }, []);
  console.log("Ordered Data is ===>", categData);

  return (
    <div>
      <AdminDashboard />
      <div
        className={classes.breadcrumb}
        style={{
          diaplay: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="main"
          sx={{
            diaplay: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div
            style={{
              diaplay: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h6">Dashboard</Typography>
            </div>
            <div>
              <Link to="/admin-add-categories">
                <Button>Add Category</Button>
              </Link>
            </div>
          </div>

          <br />
          <Divider sx={{ marginLeft: "-36px", marginRight: "-267px" }} />
        </Box>
      </div>

      <div>
        <table
          style={{
            color: "white",
            borderCollapse: "collapse",
            width: "85%",
            marginLeft: 260,
          }}
          className={classes.subtotal_div}
          id="table_checkout"
        >
          <thead
            style={{
              background:
                "linear-gradient(to right bottom, rgb(0, 125, 252), rgb(1, 71, 140) 120%)",
              color: "white",
              height: 50,
              fontSize: 16,
              textAlign: "left",
            }}
          >
            <tr>
              <th style={{ color: "white", paddingLeft: 30 }}>Category</th>
              <th>Parent Category</th>
              <th>Total Item</th>
              <th>Created at</th>
              <th>Actions</th>
            </tr>
          </thead>
          {categData.map((item, key) => (
            <tbody>
              <tr style={{ padding: "20px 0px" }}>
                <td style={{ padding: "20px 0px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      marginLeft: 20,
                    }}
                  >
                    {console.log(item.img)}
                    <div>
                      <img
                        src={item.img.postImage}
                        alt=""
                        style={{
                          height: 64,
                          width: 64,
                          borderRadius: 6,
                        }}
                      />
                    </div>
                    <div style={{ marginLeft: 10, marginTop: 20 }}>
                      <div>
                        <Typography
                          variant="h6"
                          className={classes.product_name_typo}
                        >
                          {item.name}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <Typography variant="h6" className={classes.map_text_color}>
                    {item.description}
                  </Typography>
                </td>
                <td>
                  <Typography variant="h6" className={classes.map_text_color}>
                    0
                  </Typography>
                </td>
                <td>
                  <Typography variant="h6" className={classes.map_text_color}>
                    07 Jan 2023
                  </Typography>
                </td>

                <td style={{ width: 150 }}>
                  <Link to="/admin-edit-categories" state={{ items: item }}>
                    <Button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="24"
                        height="24"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        fill="rgb(99, 115, 129)"
                      >
                        <path
                          fill="rgb(99, 115, 129)"
                          d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71ZM16 10.68L13.32 8l1.95-2L18 8.73Z"
                        ></path>
                      </svg>
                    </Button>
                  </Link>

                  <Button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      width="24"
                      height="24"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                      fill="rgb(99, 115, 129)"
                    >
                      <path
                        fill="rgb(99, 115, 129)"
                        d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12Z"
                      ></path>
                      <path
                        fill="rgb(99, 115, 129)"
                        d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm6 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z"
                      ></path>
                    </svg>
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

Categories.propTypes = {
  window: PropTypes.func,
};

export default Categories;

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
});

// **********************************************************************
