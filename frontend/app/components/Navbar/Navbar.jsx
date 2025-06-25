'use client'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo"><a href="/">🏠 Energy Model</a></div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/predict">Predict</a>
        <a href="/about">About</a>
      </div>
    </nav>
  )
}
