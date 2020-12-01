import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <nav className="navbar flex-center">
    <div className="logo-box flex-center">
      at the minute.
    </div>
    <li className="nav-list">
      <Link className="nav-item underline--magical" to='/shop'>Shop</Link>
      <a className="nav-item underline--magical" href="#about">About</a>
      <a className="nav-item underline--magical" href="#gallery">Gallery</a>
      <a className="nav-item underline--magical" href="#socials">Socials</a>
      <a className="nav-item underline--magical" href="#contact">Contact</a>
    </li>
  </nav>
}

export default NavBar