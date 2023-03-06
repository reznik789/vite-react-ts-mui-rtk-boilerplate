import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotAuthorizeOnlyRoutes from "./NotAuthorizeOnlyRoutes";
import AuthOnlyRoutes from "./AuthOnlyRoutes";
import { Home } from "src/pages/Home/Home";
import { About } from "src/pages/About/About";
import { Login } from "src/pages/Login/Login";
export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthOnlyRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/tree" element={<About />} />
        </Route>
        <Route element={<NotAuthorizeOnlyRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};
