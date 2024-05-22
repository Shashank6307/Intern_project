// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="left-nav">
//         <div className="logo">
//           <img src="" alt="" />
//           <h1>wiZe</h1>
//         </div>
//       </div>
//       <div className="right-nav">
//         <div className="notification">
//           <img src="" alt="" />
//         </div>
//         <div className="account">
//           <h2>Account</h2>
//           <img src="" alt="" />
//         </div>
//         <div className="menu">
//           <h2>Menu</h2>
//           <img src="" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import bell from "../assets/bell.png";
import menu from "../assets/menu.png";
import user from "../assets/people.png";
import "./Navbar.css";
import Logo from "../assets/grid.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="wiZe Logo" />
        <span>
          wiZ<span className="e">e</span>
        </span>
      </div>
      <div className="navbar-icons">
        <div className="bell">
          <img src={bell} alt="" />
        </div>
        <button className="user">
          <h4>Account</h4>
          <img src={user} alt="" />
        </button>

        <button className="menu">
          <h4>Menu</h4>
          <img src={menu} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
