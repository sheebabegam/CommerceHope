import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./style.css";
import { makeStyles } from "@material-ui/styles";

function BarGraph() {
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
      <Chart
        type="donubart"
        width={700}
        height={400}
        series={[
          { name: "Company1", data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 115] },
        ]}
        options={{
          // labels: [
          //   "Jan",
          //   "Feb",
          //   "Mar",
          //   "Apr",
          //   "May",
          //   "Jun",
          //   "Jul",
          //   "Aug",
          //   "Sep",
          //   "Oct",
          //   "Nov",
          //   "Dec",
          // ],

          colors: ["blue"],
        }}
      />
    </div>
  );
}
export default BarGraph;

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
