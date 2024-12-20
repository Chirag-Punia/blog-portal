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

const Admin = () => {
  const reactNavigator = useNavigate();
  return (
    <>
      <nav className={"container"}>
        <img className="temp" src={logo} alt="logo" onClick={() => {
        localStorage.removeItem("token");
        reactNavigator("/login");
      }}/>
        <ul>
          <li>Home</li>
          <li>Community</li>
          <li>Events</li>
          <li>Blogs</li>
          <li>About Us</li>
        </ul>

        <button
          onClick={() => {
            reactNavigator("/adminPannel");
          }}
        >
          Admin Pannel
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
export default Admin;
