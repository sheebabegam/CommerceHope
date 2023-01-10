import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import "../style.css";
import EarningIcon from "../../assets/Icons/EarningIcon";
import UsersIcon from "../../assets/Icons/UsersIcon";
import ProductsIcon from "../../assets/Icons/ProductsIcon";
import OrdersIcon from "../../assets/Icons/OrdersIcon";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import BarGraph from "./Graphs/BarGraph";
import Donutchart from "./Graphs/Donutchart";
import LineGraph from "./Graphs/LineGraph";
import PropTypes from "prop-types";
import AdminDashboard from "../DashboardLayout/AdminDashboard";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";

const drawerWidth = 240;

function Dashboard(props) {
  const classes = useStyles();

  const mapIcons = [
    {
      id: 1,
      heading: "Daily Earning",
      price: "$380.0",
      icon: <EarningIcon />,
    },
    {
      id: 2,
      heading: "Daily Orders",
      price: 2,
      icon: <OrdersIcon />,
    },
    {
      id: 3,
      heading: "Signup Users",
      price: 19,
      icon: <UsersIcon />,
    },
    {
      id: 4,
      heading: "Total Products",
      price: 115,
      icon: <ProductsIcon />,
    },
  ];

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
      <Box sx={{ width: "85%", marginLeft: " 15% !important" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {mapIcons.map((item, i) => (
            <Grid
              xs={3}
              style={{
                marginRight: 30,
                maxWidth: "23%",
              }}
            >
              <div className={classes.map_div_dashboard}>
                <div className={classes.for_flex}>
                  <div style={{ width: 280 }}>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: 600 }}
                      className={classes.daily_typo}
                    >
                      {item.heading}
                    </Typography>
                    <Typography
                      variant="h4"
                      style={{ fontWeight: 700 }}
                      className={classes.daily_typo1}
                    >
                      {item.price}
                    </Typography>
                  </div>
                  <div>
                    <Button className={classes.svg_blue_btn}>
                      {item.icon}
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
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
              className={classes.barchart}
            >
              <Typography
                variant="h6"
                className={classes.sales_report}
                style={{ fontWeight: 700 }}
              >
                Sales Report
              </Typography>
              <BarGraph />
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                maxWidth: "28%",
                minWidth: "28%",
              }}
              className={classes.donutchart}
            >
              <Donutchart />
            </Grid>
          </Grid>
        </Box>
      </div>

      <div style={{ marginTop: 50, marginLeft: 270 }}>
        <Box style={{ width: "96%" }} className={classes.barchart}>
          <Grid>
            <Typography
              variant="h6"
              className={classes.sales_report}
              style={{ fontWeight: 700, padding: 20 }}
            >
              Income Report
            </Typography>
            <LineGraph />
          </Grid>
        </Box>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;

const useStyles = makeStyles({
  breadcrumb: {
    marginLeft: 250,
  },
  commercehope_logo_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat !important",
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
  },
  map_div_dashboard: {
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
    display: "flex !important",
    alignItems: "center !important",
    padding: "8px 16px !important",
  },
  for_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  daily_typo: {
    margin: "0px !important",
    fontWeight: 600,
    lineHeight: 1.57143,
    fontSize: "0.875rem !important",
    fontFamily: "Montserrat !important",
  },
  daily_typo1: {
    margin: "0px !important",
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: "1.5rem !important",
    fontFamily: "Montserrat !important",
  },
  svg_blue_btn: {
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
    fontSize: "0.875rem !important",
    textTransform: "capitalize !important",
    fontFamily: "Montserrat !important",
    borderRadius: "3px !important",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
    color: "rgb(255, 255, 255) !important",
    boxShadow: "rgb(0 125 252 / 24%) 0px 8px 16px 0px !important",
    display: "block !important",
    minWidth: "50px !important",
    lineHeight: 0,
    minHeight: "50px !important",
    padding: "0px !important",
    background: "rgba(0, 125, 252, 0.9) !important",
  },
  barchart: {
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

  donutchart: {
    // overflow: "hidden !important",
    borderRadius: "8px !important",
    // position: "relative !important",
    // zIndex: 0,
    border: "1px solid rgba(145, 158, 171, 0.24) !important",
    // paddingBottom: "12px !important",
  },
  sales_report: {
    margin: "0px !important",
    fontWeight: 700,
    lineHeight: 1.55556,
    fontSize: "1.125rem !important",
    fontFamily: "Montserrat !important",
    display: "block !important",
  },
});

// **********************************************************************
