import React from "react";
import styles from "./distributes.module.css";
const Distributes = (props) => {
  //We create Total earning, Sales and Purchases in this component and import into Sidebar.js Component.
  return (
    <div className={styles.div2}>
      <div
        className={styles.totalearnicon}
        style={{ backgroundColor: `${props.bg}` }}
      >
        <div>{props.icon}</div>
      </div>
      <div className={styles.totalearn}>
        <p className={styles.heading}> {props.title}</p>
        <p className={styles.count}>{props.count}</p>
      </div>
    </div>
  );
};

export default Distributes;
