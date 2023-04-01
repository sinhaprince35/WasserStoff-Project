import React from "react";
import { RiCopperDiamondLine } from "react-icons/ri";
import styles from "./designfaster.module.css";

const DesignFaster = () => {
  // This is the side bar of the third page that is design faster, total earning and travel presentation / bussiness description.
  return (
    <div className={styles.designfaster}>
      {/* Title of the Sidebar  */}
      <p className={styles.headingDesign}>Design Faster</p>
      {/* Earning Circle i have created two circles in the earning circle. */}
      <div className={styles.cirleearning}>
        <div className={`${styles.circles} ${styles.itemcenter}`}>
          <div className={`${styles.innercircle} ${styles.itemcenter}`}>
            <div className={`${styles.innermostcircle} ${styles.itemcenter}`}>
              {/* Using react icons framework   */}
              <RiCopperDiamondLine size="45" color="#8676FF" />
            </div>
          </div>
        </div>
        <p>Total earning</p>
        <p className={styles.updown}>
          $12,875 <span>2% up</span>
        </p>
        <p className={styles.compare}>Compared to $ 21,504 last year</p>
        <div className={styles.types}>
          <div>
            Travel <span>852</span>
            <svg
              width="68"
              height="13"
              viewBox="0 0 68 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3C8.62687 3 7.61194 12 17.7612 12C27.9104 12 25.3731 5 34 5C42.6269 5 44.5157 1 51.2537 1C57.7936 1 59.3731 10.5 68 10.5"
                stroke="#8676FF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            Presentation <span>753</span>
            <svg
              width="68"
              height="13"
              viewBox="0 0 68 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.92896C8.69077 8.92896 7.66833 5.47584 17.8928 5.47584C28.1172 5.47584 25.5611 11.9524 34.2519 11.9524C42.9426 11.9524 44.8455 6.92896 51.6334 6.92896C58.2217 6.92896 59.3092 1 68 1"
                stroke="#FF708B"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            Research <span>553</span>
            <svg
              width="67"
              height="10"
              viewBox="0 0 67 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1C8.62687 1 6.85075 7.75 17 7.75C27.1493 7.75 25.3731 4 34 4C42.6269 4 42.262 8.875 49 8.875C55.5398 8.875 58.3731 1 67 1"
                stroke="#FFBA69"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.bgblue} style={{ color: "white" }}>
        <div>
          <p style={{ fontSize: "0.7rem" }}>Total earning</p>
          <p style={{ fontSize: "1rem" }}>
            $12,875 <span>2% up</span>
          </p>
          <p className={styles.compare} style={{ fontSize: "0.7rem" }}>
            Compared to $ 21,504 last year
          </p>
        </div>
        <div className={styles.totalearn}>
          <p style={{ fontSize: "0.7rem" }}>Total earning</p>
          <p style={{ fontSize: "1rem" }}>
            $12,875 <span>2% up</span>
          </p>
          <p className={styles.compare} style={{ fontSize: "0.7rem" }}>
            Compared to $ 21,504 last year
          </p>
        </div>
      </div>
      <div className={`${styles.types} ${styles.accdata}`}>
        <div>
          Travel <span>852</span>
          2540
        </div>
        <div>
          Presentation <span>753</span>2307
        </div>
        <div>
          Research <span>553</span>9021
        </div>
      </div>
    </div>
  );
};

export default DesignFaster;
