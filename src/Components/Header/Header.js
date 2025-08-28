import React, { useState } from 'react'
import './Header.scss'

export default function Header() {
    const [open, setOpen] = useState(false);

  return (
    <nav className='Header'>
        <a className='logo' href='/'> Ahmed <span className='Dot'>.</span> </a>

        <ul className={`nav ${open ? "open" : ""}`}>
            <li><a href='#home' onClick={() => setOpen(false)}>Home</a></li>
            <li><a href='#about' onClick={() => setOpen(false)}>About</a></li>
            <li><a href='#skills' onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href='#projects' onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href='#contact' onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

        <div className='menu-icon' onClick={()=> setOpen(!open)}>☰</div>

    </nav>
  )
}
