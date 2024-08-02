import React from "react";
import "../styles/Nav.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const reactNavigator = useNavigate();


  return (
    <nav className={"container"}>
      <img className="temp" src={logo} alt="logo" onClick={() => {
        localStorage.removeItem("token");
        reactNavigator("/login");
      }}/>
      <ul>
        <li onClick={() => reactNavigator("/")}>Home</li>
        <li onClick={() => reactNavigator("/community")}>Community</li>
        <li onClick={() => reactNavigator("/events")}>Events</li>
        <li onClick={() => reactNavigator("/blogs")}>Blogs</li>
        <li onClick={() => reactNavigator("/about")}>About Us</li>
      </ul>
      <button
        onClick={() => {
          reactNavigator("/newsletter");
        }}
      >
        Subscribe Newsletter
      </button>
      <button
        onClick={() => {
          reactNavigator("/login");
        }}
      >
        Login
      </button>
    </nav>
  );
};

export default Nav;
