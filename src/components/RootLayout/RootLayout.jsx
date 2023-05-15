import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function RootLayout() {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default RootLayout;
