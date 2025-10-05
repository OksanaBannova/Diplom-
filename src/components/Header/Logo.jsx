import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Logo = () => {
  return (
    <>
      <Link to="/Diplom-" className="logo-container" id="startLogo">
        Лого
      </Link>
    </>
  );
};

export default Logo;