import * as React from "react";
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

const drawerWidth = 240;
function Orders(props) {
  const classes = useStyles();

  return (
    <div>
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
              <th style={{ color: "white", paddingLeft: 30 }}>Product</th>
              <th>Created at</th>
              <th>Status</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* {ListCart.map((item, key) => ( */}
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
                  <div>
                    <img
                      src="https://res.cloudinary.com/techgater/image/upload/v1669281850/my-uploads/jweav3dmxwvdujovj3ms.jpg"
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
                        Test
                      </Typography>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <Typography variant="h6" className={classes.map_text_color}>
                  09 Jan 2023 10:45
                </Typography>
              </td>
              <td>
                <Typography variant="h6" className={classes.map_text_color}>
                  pending
                </Typography>
              </td>
              <td>
                <Typography variant="h6" className={classes.map_text_color}>
                  $100.0
                </Typography>
              </td>
              <td>
                <Typography variant="h6" className={classes.map_text_color}>
                  1
                </Typography>
              </td>
              <td>
                <Button>
                  <svg
                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-10dohqv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="RemoveRedEyeIcon"
                    fill="rgb(99, 115, 129)"
                    height={25}
                    width={25}
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                  </svg>
                </Button>
              </td>
            </tr>
          </tbody>
          {/* ))} */}
        </table>
      </div>
    </div>
  );
}

Orders.propTypes = {
  window: PropTypes.func,
};

export default Orders;

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
