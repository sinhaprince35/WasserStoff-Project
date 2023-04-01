import React from "react";
import Barchart from "../BarChartown/BarChartown";
import Sidebar from "../Sidebar/Sidebar";
import WorldMap from "../Worldmap/WorldMap";

const Home = () => {
  //This the Home Section where I import three componnets and export into App components and Exporting into MainRoutes components.
  return (
    <div>
      <Sidebar />
      <WorldMap />
      <Barchart />
    </div>
  );
};

export default Home;
