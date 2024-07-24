// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const NavFoot = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NavFoot;
