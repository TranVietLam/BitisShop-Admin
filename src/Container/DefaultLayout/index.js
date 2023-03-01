import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import routes from "./../../routes/routes";

const DefaultLayout = () => {
  return (
    <>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
};

export default DefaultLayout;
