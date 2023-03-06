import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthOnlyRoutes from "src/components/AuthOnlyRoutes";
import { Home } from "src/pages/Home/Home";
import { About } from "src/pages/About/About";
import { Login } from "src/pages/Login/Login";
import NotAuthorizeOnlyRoutes from "src/components/NotAuthorizeOnlyRoutes";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<AuthOnlyRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<NotAuthorizeOnlyRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
