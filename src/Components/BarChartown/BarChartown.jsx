import React from "react";
import { BarChart, Bar } from "recharts";
import styles from "../BarChartown/barchart.module.css";

const BarChartown = () => {
  // In the first page (Statictics component), I have created a bar charts above the footer to shows the sales figures data.
  const data = [
    { value: 10 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 10 },
    { value: 17 },
    { value: 25 },
    { value: 18 },
  ];
  return (
    <div className={styles.barchart}>
      {/* Title of the Bar Graph */}
      <div className={styles.salesfigure}>
        <h3 className={styles.heading1}>
          <span style={{ fontSize: "14px" }}>Sales Figures</span> <br />{" "}
          <span>$10,430</span>
        </h3>
      </div>
      {/* To display the Bar Chart or graph, I have importing this chart from Rechart framework */}
      <div className={styles.graph} style={{ display: "flex" }}>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#FF708B" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <BarChart width={150} height={45} data={data}>
          <Bar dataKey="value" fill="#dbdff1" />
        </BarChart>
        <div className={styles.underline}></div>
      </div>
    </div>
  );
};

export default BarChartown;
