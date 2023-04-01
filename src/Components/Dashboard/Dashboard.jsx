import React from "react";
import styles from "./dashboard.module.css";
import DesignFaster from "../DesignFaster/DesignFaster";
import BubbleGraph from "../BubbleGraph/BubbleGraph";

const Dashboard = () => {
  // Creating a third page that is Dashboard and importing the wo components that is Design Faster and Bubble Graph and exporting into MainRoutes Components.
  return (
    <div className={styles.dashboard}>
      <DesignFaster />
      <BubbleGraph />
    </div>
  );
};

export default Dashboard;
