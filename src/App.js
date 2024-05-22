import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Modulecontent from "./components/Hero/Modulecontent";
import Coursecontent from "./components/Hero/Coursecontent";
import Sidebar2 from "./components/Sidebar2/Sidebar2";
const App = () => {
  const [showCourseContent, setShowCourseContent] = useState(true);

  const handleModuleClick = () => {
    setShowCourseContent(!showCourseContent);
  };
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Hero />
        </div>
      </div>
      <Sidebar2 />
    </div>
  );
};

export default App;
