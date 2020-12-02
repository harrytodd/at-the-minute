import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return <nav className="navbar flex column">
    <li className="nav-list">
      <Link className="nav-item underline--magical" to='/shop'>Shop</Link>
      <a className="nav-item underline--magical" href="#about">About</a>
      <a className="nav-item underline--magical" href="#gallery">Gallery</a>
      <a className="nav-item underline--magical" href="#socials">Socials</a>
      <a className="nav-item underline--magical" href="#contact">Contact</a>
    </li>
    <h1 className="logo-box">
      at the minute.
    </h1>
  </nav>
}

export default NavBar