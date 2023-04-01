import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../Components/Dashboard/Dashboard";
import Footer from "../Components/Footer/Footer";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Overview from "../Components/Overview/Overview";

const MainRoutes = () => {
  // I have creating this components for routing the page using react router dom.
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
