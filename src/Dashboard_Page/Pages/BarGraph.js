import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

// import "./styles.css";

function BarGraph() {
  const data = {
    labels: [
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
    datasets: [
      {
        label: "First set",
        data: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 115],
        backgroundColor: "blue",
      },
    ],
  };

  const options = {
    responsive: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: true,
            borderDash: [4, 4],
            zeroLineColor: "blue",
          },
          categoryPercentage: 0.7,
          barPercentage: 0.9,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            zeroLineColor: "transparent",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div style={{}}>
      <Bar width="200" height="200" data={data} options={options} />
    </div>
  );
}

export default BarGraph;
