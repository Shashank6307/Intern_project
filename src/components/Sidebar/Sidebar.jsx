import React from "react";
import {
  FaHome,
  FaCompass,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaBriefcase,
  FaHandshake,
  FaBlogger,
  FaUsers,
  FaBookReader,
} from "react-icons/fa";
import "./Sidebar.css";

import fb from "../assets/facebook (1).png";
import watsapp from "../assets/whatsapp.png";
import insta from "../assets/instagram (1).png";
import youtube from "../assets/facebook (1).png";
import discord from "../assets/discord.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaHome />
        <span className="text">Home</span>
      </div>
      <div className="sidebar-item">
        <FaCompass />
        <span className="text">Explore</span>
      </div>
      <div className="sidebar-item">
        <FaBookReader />
        <span className="text">Learn</span>
      </div>
      <div className="sidebar-item">
        <FaGraduationCap />
        <span className="text">Achieve</span>
      </div>
      <div className="sidebar-item">
        <FaChalkboardTeacher />
        <span className="text">Practice</span>
      </div>
      <div className="sidebar-item">
        <FaProjectDiagram />
        <span className="text">Projects</span>
      </div>
      <div className="sidebar-item">
        <FaBriefcase />
        <span className="text">Career</span>
      </div>
      <div className="sidebar-item">
        <FaHandshake />
        <span className="text">Mentorship</span>
      </div>
      <div className="sidebar-item">
        <FaBlogger />
        <span className="text">Blogs</span>
      </div>
      <div className="sidebar-item">
        <FaUsers />
        <span className="text">Community</span>
      </div>
      <div className="sidebar-connect">
        <div className="connect-circle"></div>
      </div>
      <div className="social_icons">
        <h2>Connect with us </h2>
        <div className="icons">
          <img src={fb} alt="" />
          <img src={watsapp} alt="" />
          <img src={insta} alt="" />
          <img src={discord} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
