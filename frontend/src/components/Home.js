import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const Home = (props) => {
  return <>
    <NavBar />
    <main className="flex column">
      <section id="about" className="about flex row">
        <div className="about-box about-us flex column">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis suscipit ipsum, at condimentum lacus. Ut massa dui, facilisis eget semper id, aliquam eget quam. Suspendisse porttitor eget felis at.
          </p>
        </div>
        <div className="about-box about-supplies flex column">
          <h2 className="about-title">Our Supplies</h2>
          <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis suscipit ipsum, at condimentum lacus. Ut massa dui, facilisis eget semper id, aliquam eget quam. Suspendisse porttitor eget felis at.
          </p>
        </div>
        <div className="about-box about-clothes flex column">
          <h2 className="about-title">Our Clothes</h2>
          <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis suscipit ipsum, at condimentum lacus. Ut massa dui, facilisis eget semper id, aliquam eget quam. Suspendisse porttitor eget felis at.
          </p>
        </div>
      </section>
    </main>
  </>
}

export default Home