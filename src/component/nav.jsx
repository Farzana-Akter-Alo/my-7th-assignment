import { useState } from "react";
import "../App.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-div">
      <div className="nav-content">
        <h1>CS — Ticket System</h1>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
        <div className={`bar ${isOpen ? "change" : ""}`}></div>
      </div>

      <div className={`nav-list ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Changelog</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="nav-btn">+ New Ticket</button>
      </div>
    </div>
  );
}

export default Nav;
