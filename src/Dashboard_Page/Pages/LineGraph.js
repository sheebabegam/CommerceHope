import React from "react";
import Chart from "react-apexcharts";

export default function LineGraph() {
  const guestSeries = [
    {
      name: "Guests",
      data: [0, 0, 628, 79, 0, 29, 28],
    },
  ];
  const guestOption = {
    chart: {
      id: "guest",
      group: "social",
    },
    xaxis: {
      categories: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        show: true,
        formatter: function (val) {
          return "$" + Number(val).toLocaleString() + ".0";
        },
      },
    },
  };

  return (
    <div>
      <Chart
        type="line"
        series={guestSeries}
        options={guestOption}
        width="90%"
        height={400}
      />
    </div>
  );
}
