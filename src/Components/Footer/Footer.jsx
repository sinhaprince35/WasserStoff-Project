import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  // I have created the footer section and Exporting into MainRoutes components and export into main page that is App.js
  return (
    <div className={styles.footer}>
      <p>ORION DATA VISUALISATION</p>
      <p>2022</p>
    </div>
  );
};

export default Footer;
