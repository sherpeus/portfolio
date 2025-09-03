import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./css/NavBar.css";
function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={() => setOpen(!isOpen)}>☰</button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/achievements" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>Achievements</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
