import React from "react";
import styles from "./bubbleGraph.module.css";

const BubbleGraph = () => {
  return (
    <div className={`${styles.bubbles} ${styles.itemcenter}`}>
      {/* In the third page, I have created time stamps  */}
      <div className={styles.timeperiod}>
        <span>1W</span>
        <span>1M</span>
        <span>3M</span>
        <span>1Y</span>
        <span>All</span>
      </div>
      {/* I have created footer of the Bubbles Graph */}
      <div className={styles.allbubles}>
      <div className={styles.centerdiv}>
          <div className={styles.innermost}>
           
          </div>
        </div>
      </div>
      {/* This is the below Area of the graph.  */}
      <div className={styles.data}>
        <div>
          <span className={styles.title}>TREND GOOD</span>
          <br />
          <span>204</span>
        </div>
        <div>
          <span className={styles.title}>SHOPPING VIEWS</span>
          <br />
          <span>65,540</span>
        </div>
        <div>
          <span className={styles.title}>STORE DYNAMICS</span>
          <br />
          <span>324</span>
        </div>
      </div>
    </div>
  );
};

export default BubbleGraph;
