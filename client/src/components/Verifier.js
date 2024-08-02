import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/Creator.css";
import Heading from "./Heading";
import TopicSelector from "./TopicSelector";
import Home from "./Home";
import FAQ from "./FAQ";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Verifier = () => {
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
            reactNavigator("/verifyPannel");
          }}
        >
          Verifier Pannel
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            reactNavigator("/login");
          }}
        >
          Log Out
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
export default Verifier;
