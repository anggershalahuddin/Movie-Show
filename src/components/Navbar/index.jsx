import React from "react";
import "./style.css";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="__navbar-container">
      <nav className="__navbar">
        <div className="__navbar-logo">Logo</div>
        <div className="__navbar-search">
          <input
            type="text"
            placeholder="Search Here"
            className="__navbar-search-input"
          />
          <button className="__navbar-search-button">
            <BiSearchAlt />
          </button>
        </div>
        <button className="__navbar-button-history">History</button>
      </nav>
    </div>
  );
};

export default Navbar;
