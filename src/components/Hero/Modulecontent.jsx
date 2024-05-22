import React, { useState } from "react";
import "./Hero.css";
import play from "../assets/play.png";
import revision from "../assets/revision.png";
import asessment from "../assets/clipboard.png";
import computer from "../assets/computer.png";
import cross from "../assets/cross.png";
import check from "../assets/checked.png";
import module from "../assets/training.png";
import start from "../assets/start.png";
import project from "../assets/pr2.png";
import robot2 from "../assets/robot (1).png";
import rev from "../assets/revision (1).png";
import "./Modulecontent.css";
import { MdInfo } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import Sidebar2 from "../Sidebar2/Sidebar2";

const Modulecontent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    return <Sidebar2 />;
  };

  const toggleInterface = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div id="modules" onClick={toggleInterface} className="toggle-button">
        <div className="module">
          <div className="module-details">
            <img src={module} alt="" />
            <div className="info">
              <h2>Module 1</h2>
              <h1>Tech101: Starting in Tech</h1>
              <div className="module-meta">
                <span>7 Lessons</span>
                <span>• 7 Weeks</span>
                <span>• 7 Credits</span>
              </div>
            </div>
          </div>
          <div className="grade-progress">
            {/* <div className="grade">
              <span>Grade</span>
              <span>66%</span>
            </div> */}
            <div className="div-line">|</div>
            <div className="progress_bAR">
              <h2>Progress</h2>
              <div class="progress-container">
                <span class="progress-label">66%</span>
                <div class="progress-bar">
                  <div class="progress" style={{ width: "66%" }}></div>
                </div>
              </div>
            </div>
            <button id="buttondown">{isOpen ? "▲" : "▼"}</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <>
          <div className="content-container">
            <div className="lesson_container">
              <div className="lesson">
                <h4>Chapter 1</h4>
                <p>Getting Started With Python</p>
              </div>
              <div className="lesson">
                <h4>Chapter 1</h4>
                <p>Getting Started With Python</p>
              </div>
              <div className="lesson">
                <h4>Chapter 1</h4>
                <p>Getting Started With Python</p>
              </div>
              <div className="lesson">
                <h4>Chapter 1</h4>
                <p>Getting Started With Python</p>
              </div>
            </div>

            <div className="lessons-list">
              <h3>Lessons</h3>
              <div className="lesson_info">
                <div className="info-container">
                  <div className="lesson-item">
                    <img src={play} alt="" />
                    <p>
                      <span>Language of ML: </span> Python
                    </p>
                  </div>
                  <button className="revise">
                    <p>Revise</p>
                    <img src={rev} alt="" />
                  </button>
                </div>
                <div className="info-container">
                  <div className="lesson-item">
                    <img src={revision} alt="" />
                    <p>
                      {" "}
                      <span>Supervised Learning:</span> Regression
                    </p>
                  </div>
                  <button className="completed">
                    <p>Completed</p>
                    <img src={check} alt="" />
                  </button>
                </div>
                <div className="info-container">
                  <div className="lesson-item">
                    <img src={asessment} alt="" />
                    <p>
                      {" "}
                      <span>Assessment:</span> Python
                    </p>
                  </div>
                  <button className="tryagain">
                    <p>Try Again</p>
                    <img src={cross} alt="" />
                  </button>
                </div>
                <div className="info-container">
                  <div className="lesson-item">
                    <img src={computer} alt="" />
                    <p>
                      {" "}
                      <span>Hands on:</span> ML
                    </p>
                  </div>
                  <button className="not_started">
                    <p>Not started!</p>
                    <img src={start} alt="" />
                  </button>
                </div>
                <div className="info-container">
                  <div className="lesson-item">
                    <img src={robot2} alt="" />
                    <p>
                      {" "}
                      <span>ML:</span> Interact with data
                    </p>
                  </div>
                  <button className="revise">
                    <p>Revise!</p>
                    <img src={rev} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="project-left">
              <img src={project} alt="" />
            </div>
            <div className="project-right">
              <div className="title">
                <div className="heading">
                  <h2>Capstone Project</h2>
                  <MdInfo size={30} color="blue" />
                </div>
                <h4>View Guidelines</h4>
              </div>
              <hr />
              <div className="proj-content">
                <h3>Avengers & Silicon Valley</h3>
                <div className="content-info">
                  <p>
                    Avengers: Harness Python to conquer challenges in this
                    Silicon Valley-inspired project. Learn Python and machine
                    learning as you emerge as a tech hero!
                  </p>
                  <FaArrowRight size={30} color="blue" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modulecontent;
