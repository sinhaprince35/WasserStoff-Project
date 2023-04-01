import React from "react";
import styles from "./overview.module.css";
import BubbleChart from "../Bubblechart/BubbleChart";
import SideBar from "../Sidebar/Sidebar";
import BarChart from "../BarChartown/BarChartown";

const OverView = () => {
  // I have created this OverView Components and importing three components Bubble Charts, SideBar and BarChart. And Exporting into MainRoutes components.
  return (
    <div className={styles.overview}>
      <SideBar />
      <BarChart />
      <BubbleChart />
    </div>
  );
};

export default OverView;
