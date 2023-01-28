// Packages
import React, { useEffect, useState } from "react";

// Data
import { routes } from "../Data/dummy";

// Styles
import "../Styles/navbar.scss";

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    const changeNavbarBackgroundColor = () => setBgColor(window.scrollY >= 70);

    window.addEventListener("scroll", changeNavbarBackgroundColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarBackgroundColor);
    }
  }, []);

  return (
    <div className={bgColor ? "app__navbar active" : "app__navbar"}>
      <div className="navbar__logo">
        <p>D'task</p>
      </div>
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route">
            <a href={route.path}> {route.name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__buttons">
        <button
          style={{
            color: bgColor ? "#0c1727" : "white",
          }}
          className="onebtn"
        >
          Login
        </button>
        <button
          style={{
            color: bgColor ? "white" : "#0c1727",
            background: bgColor ? "#0c1727" : "white",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
