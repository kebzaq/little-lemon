import React from "react";

export default function Navbar() {
  return (
    <nav className="container">
      <ul className="nav col-xl-9 justify-content-md-center">
        <li className="nav-item">
          <img
            id="logo"
            src="https://little-lemon-restaurant-project.netlify.app/static/media/Logo.6c132dfefa69396bba43f72aa595e62f.svg"
            alt="Little Lemon logo"
          />
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link active">
            Home
          </a>
        </li>
        <li className="nav">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav">
          <a href="#" className="nav-link">
            Menu
          </a>
        </li>
        <li className="nav">
          <a href="#" className="nav-link">
            Reservations
          </a>
        </li>
        <li className="nav">
          <a href="#" className="nav-link">
            Order Online
          </a>
        </li>
        <li className="nav">
          <a href="#" className="nav-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
