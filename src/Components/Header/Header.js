import React, { useState } from 'react'
import './Header.scss'

export default function Header() {
    const [open, setOpen] = useState(false);

  return (
    <nav className='Header'>
        <a className='logo' href='/'> Ahmed <span className='Dot'>.</span> </a>

        <ul className={`nav ${open ? "open" : ""}`}>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='menu-icon' onClick={()=> setOpen(!open)}>☰</div>

    </nav>
  )
}
