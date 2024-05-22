import React from "react";
import "./Sidebar2.css";
import module from "../assets/training.png";

const Sidebar = () => {
  return (
    <div className="sidebar2">
      <div className="module2">
        <div className="module-details2">
          <img src={module} alt="" />
          <div className="info2">
            <h2>Module 1</h2>
            <h1>Tech101: Starting in Tech</h1>
            <div className="module-meta2">
              <span>7 Lessons</span>
              <span>• 7 Weeks</span>
              <span>• 7 Credits</span>
            </div>
          </div>
        </div>
      </div>

      <div className="profile">
        <div className="profile-info">
          <p>Grade</p>
          <h2>47%</h2>
        </div>
        <div className="profile-info">
          <p>Credits</p>
          <h2>4/12</h2>
        </div>
        <div className="calendar">
          <p>16</p>
        </div>
      </div>
      <div className="navigation">
        <button className="nav-button">Insights</button>
        <button className="nav-button">Roadmap</button>
        <button className="nav-button">+</button>
      </div>
      <div className="chapters">
        <div className="chapter">
          <h4>Chapter 1</h4>
          <p>Getting started with ML</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "20%" }}></div>
          </div>
          <button className="arrow-button">→</button>
        </div>
        <div className="chapter">
          <h4>Chapter 2</h4>
          <p>Development Frameworks</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "50%" }}></div>
          </div>
          <button className="arrow-button">→</button>
        </div>
        <div className="chapter">
          <h4>Chapter 3</h4>
          <p>Cyber Security</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: "30%" }}></div>
          </div>
          <button className="arrow-button">→</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
