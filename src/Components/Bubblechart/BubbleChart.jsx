import React, { useState } from "react";
import Chart from "react-apexcharts";
import styles from "./bubblechart.module.css";

const BubbleChart = () => {
  // In the second page (OverView component), Using React Apex Charts framework to import the bubble chart to show monthly earning or engaging users.
  const [state] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
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
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 55, 10, 22, 55],
      },
    ],
  });
  return (
    <div className={styles.bubblechart}>
      {/* For Showing the apex bubble chart using react apexchart */}
      <Chart
        options={state.options}
        series={state.series}
        type="scatter"
        width="800"
        height={"100%"}
      />
    </div>
  );
};

export default BubbleChart;
