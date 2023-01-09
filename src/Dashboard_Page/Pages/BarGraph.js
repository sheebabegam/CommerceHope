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
      ></Typography>
      <Chart
        type="bar"
        width={900}
        height={350}
        options={{
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],

            position: "bottom",
            labels: {
              offsetY: 0,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs_: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            // tooltip: {
            //   enabled: false,
            //   offsetY: -45,
            //   fill: "rgb(0, 125, 252)",
            // },
          },
          fill: {
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 0.25,
              gradientToColors: undefined,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [50, 0, 100, 100],
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: true,
              formatter: function (val) {
                return Number(val).toLocaleString();
              },
            },
          },

          chart: {
            animations: {
              enabled: false,
            },
          },
        }}
        series={[
          { name: "Sales", data: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 115] },
        ]}
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
