import React, { useState } from "react";
import "./Header.scss";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="Header">
      <a className="logo" href="/">
        {" "}
        Ahmed <span className="Dot">.</span>{" "}
      </a>

      <ul className={`nav ${open ? "open" : ""}`}>
        <li> <a href="#home" onClick={() => setOpen(false)}> Home </a> </li>
        <li> <a href="#about" onClick={() => setOpen(false)}> About </a> </li>
        <li> <a href="#skills" onClick={() => setOpen(false)}> Skills </a> </li>
        <li> <a href="#projects" onClick={() => setOpen(false)}> Project </a> </li>
        <li> <a href="#contact" onClick={() => setOpen(false)}> Contact </a> </li>
      </ul>

      <div className="social">
        <a href="https://github.com/AhmedAdeel4" target="blank"> <i class="bi bi-github"></i> </a>
        <a href="https://www.linkedin.com/in/ahmed-adel-b6191b359/" target="blank" > <i class="bi bi-linkedin"></i> </a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="blank"> <i class="bi bi-envelope-at-fill"></i> </a>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {" "}
        ☰{" "}
      </div>
    </nav>
  );
}
