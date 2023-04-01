import React from "react";
import styles from "./sidebar.module.css";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";
import Distributes from "../Distributes/Distributes";
import ActiveNewUser from "../ActiveNewUser/ActiveNewUser";

const Sidebar = () => {
  return (
    // I have created Sidebar components of the first page and importing two components that is Distributes and ActiveNewUser and also using material UI for inserting Icons.
    <div className={styles.sidebar}>
      <p className={styles.sidebartext}>WSTF FRONT-END HACKATHON</p>
      <div className={`${styles.div1} ${styles.div}`}>
        <p className={styles.users}>
          All Users <span className={styles.detail}>DETAIL</span>
        </p>
        <p className={styles.total}>2,431,340</p>
      </div>
      {/* Adding Distributes Components */}
      <div className={styles.distributes}>
        <Distributes
          title="Total Earning"
          count="540,549"
          bg="#8676FF"
          icon={
            <TrendingUpSharpIcon
              size="25"
              color="white"
              style={{
                height: "30px",
                width: "30px",
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          }
        />
        <Distributes
          title="Sales"
          count="1,205,677"
          bg="#66C8FF"
          icon={<EmojiEventsIcon size="25" color="white" />}
        />
        <Distributes
          title="Purchase"
          count="48,430,039"
          bg="#FF9066"
          icon={<BarChartIcon size="25" color="white" />}
        />
      </div>
      {/* Adding Active Users and New Users using activeNewUser components. */}
      <div className={styles.percentageCircle}>
        <ActiveNewUser
          className="div3"
          title="92,980"
          color="blue"
          user="Active Users"
          percentage="27%"
        />
        <ActiveNewUser
          className="div3"
          title="22,652"
          color="green"
          user="New Users"
          percentage="67%"
        />
      </div>
    </div>
  );
};

export default Sidebar;
