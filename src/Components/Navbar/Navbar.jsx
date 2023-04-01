import React from "react";
import styles from "./navbar.module.css";
import WasserstoffIcon from "../../Assets/wstf-logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ProfileLogo from "../../Assets/ProfileLogo.svg";
import ListLogo from "../../Assets/ListLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // I have created NavBar components and Exporting into MainRoutes components.
    <div className={styles.navbar}>
      {/* This line contains logo and name of the project */}
      <div className={styles.logoname}>
        <div className={styles.logo}>
          <img src={WasserstoffIcon} alt="logo" />
        </div>
        {/* Here is the title of the project  */}
        <p className={styles.name}>WASSERSTOFF</p>
      </div>
      <div className={styles.navlist}>
        <div className={styles.searchbox}>
          {/* Below is the part of Search Box */}
          <input type="search" name="search" class={styles.search} />
          <span className={styles.searchIcon1}>
            <SearchIcon />
          </span>
        </div>
        {/* I have created the menu using unordered list  */}
        <ul className={styles.navlist}>
          <li>
            <Link to="/">Statistics</Link>
          </li>
          <li>
            <Link to="/Overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/analytics">Analytics</Link>
          </li>
        </ul>
      </div>
      {/* This section contains the two logo that is profile icon and side icon.  */}
      <div className={styles.profileoption}>
        <span className={styles.sideicon}>
          <img src={ProfileLogo} alt="logo" />
        </span>
        <span className={styles.sideicon}>
          <img src={ListLogo} alt="logo" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
