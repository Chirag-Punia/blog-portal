import React from "react";
import Nav from "./Nav";
import Heading from "./Heading";
import TopicSelector from "./TopicSelector";
import Home from "./Home";
import FAQ from "./FAQ";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

export const Viewer = () => {
  const reactNavigator = useNavigate();
  return (
    <>
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
          Join Waitlist
        </button>
        <button
          onClick={() => {
            reactNavigator("/userDetails");
          }}
        >
          User
        </button>
      </nav>
      <Heading />
      <TopicSelector />
      <Home />
      <FAQ />
      <Footer />
    </>
  );
};
