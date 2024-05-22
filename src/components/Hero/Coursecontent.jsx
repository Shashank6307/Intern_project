import React from "react";
import "./Hero.css";
import robot from "../assets/robot.png";
import course from "../assets/course.png";
import chapter from "../assets/chapter.png";

const Coursecontent = () => {
  return (
    <div>
      <div className="course-content">
        <div className="header">
          <div className="course-image">
            <img src={robot} alt="Robot" />
          </div>
          <div className="course-info">
            <h1>Introduction to Machine Learning</h1>
            <div className="course-meta">
              <span>3 Weeks</span>
              <span>6 Modules</span>
            </div>
            <div className="module-info">
              <div className="info-1">
                <img src={course} alt="" />
                <p>
                  Module: <span> </span> Data Science
                </p>
              </div>
              <div className="info-1">
                <img src={chapter} alt="" />
                <p>
                  Chapter: <span> </span> Supervised Learning & Applications
                </p>
              </div>
            </div>
            <div class="progress-container">
              <span class="progress-label">66%</span>
              <div class="progress-bar">
                <div class="progress" style={{ width: "66%" }}></div>
              </div>
            </div>
            <div className="buttons">
              <button className="view-insights">View Insights</button>
              <button className="resume-learning">Resume Learning</button>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Coursecontent;
