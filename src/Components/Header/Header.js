import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from "react-scroll";
import './Header.css'

export default function Header() {
  return (
    <div className='Header'>
        <Link className='logo' to='/'>
            Ahmed
            <span className='Dot'>.</span>
        </Link>
        <nav>
            <Link className='Link' to='/'>Home</Link>
            <Link className='Link' to="about">About</Link>
            <Link className='Link' to='skills'>Skills</Link>
            <Link className='Link' to='#'>Projects</Link>
            <Link className='Link' to='#'>Contact</Link>
        </nav>
    </div>
  )
}
