import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./style.css";
import { makeStyles } from "@material-ui/styles";

function Donutchart() {
  const classes = useStyles();
  return (
    <div className="container-fluid mt-3 mb-3 ">
      <Typography
        variant="h6"
        className={classes.sales_report}
        style={{ fontWeight: 700 }}
      >
        Order Report
      </Typography>
      {/* <h2 className="text-left">Order Report</h2> */}
      <Chart
        type="donut"
        width={400}
        height={400}
        style={{ padding: "30px 50px" }}
        series={[70, 12, 14, 1, 3]}
        options={{
          labels: [
            "Pending",
            "On The Way",
            "Delivered",
            "Returned",
            "Cancelled",
          ],

          plotOptions: {
            pie: {
              customScale: 1,
            },
          },

          fill: {
            colors: [
              "rgb(0, 125, 252)",
              "rgb(51, 102, 255)",
              "rgb(84, 214, 44)",
              "rgb(255, 193, 7)",
              "rgb(255, 72, 66)",
            ],
          },

          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    showAlways: true,
                    //formatter: () => '343',
                    fontSize: 30,
                    color: "#f90000",
                  },
                },
              },
            },
          },

          dataLabels: {
            enabled: true,
          },
        }}
      />
    </div>
  );
}
export default Donutchart;

const useStyles = makeStyles({
  sales_report: {
    margin: "0px !important",
    fontWeight: 700,
    lineHeight: 1.55556,
    fontSize: "1.125rem !important",
    fontFamily: "Montserrat !important",
    display: "block !important",
  },
});
