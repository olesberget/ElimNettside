import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./NavMenu.css";
import logo from "./img/misjonslogoblack.png";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-menu">
        <img
        src={logo}
        alt="Logo"
        className="nav-logo"
        onClick={() => (window.location.href = "/")}
        />
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>
      {isOpen && (
        <div className="nav-links">
          <Link to="/">Elim Heddal</Link>
          <Link to="/elimmedia">Elim Media</Link>
          <Link to="/saligblanding">Salig Blanding</Link>
        </div>
      )}
    </div>
  );
}

export default NavMenu;