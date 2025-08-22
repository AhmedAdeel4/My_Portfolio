import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link className='Link' to='#'>About</Link>
            <Link className='Link' to='#'>Skills</Link>
            <Link className='Link' to='#'>Projects</Link>
            <Link className='Link' to='#'>Contact</Link>
        </nav>
    </div>
  )
}
