import React from "react";
import { Route, Routes } from "react-router-dom";
import LmsMainAppComponent from "./components/LmsMainAppComponent";
import Layout1 from "./components/layout/Layout1";
import DisplayDetails from "./components/layouts/DisplayDetails";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LmsMainAppComponent />} />
        <Route path="/admin/login" element={<LmsMainAppComponent />} />
        <Route path="/mentor/login" element={<LmsMainAppComponent />} />
        <Route path="/employee/login" element={<LmsMainAppComponent />} />
        <Route path="/batch" element={<Layout1 />} />
      </Routes>
    </div>
  );
};

export default Router;
