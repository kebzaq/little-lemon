import React from "react";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">
        <img
          src="https://little-lemon-restaurant-project.netlify.app/static/media/Logo.6c132dfefa69396bba43f72aa595e62f.svg"
          alt="Little Lemon logo"
        />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}
