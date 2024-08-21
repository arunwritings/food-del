import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt='' className='footer-content-left-logo'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non doloribus corrupti culpa temporibus fugiat earum cumque doloremque! Praesentium nemo pariatur, at, excepturi architecto sunt rerum quia, itaque quos voluptas tenetur.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt='' />
                <img src={assets.twitter_icon} alt='' />
                <img src={assets.linkedin_icon} alt='' />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-9999999999</li>
                <li>contact@thindipotha.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © Thindipotha.com - All Rights Reserveed.</p>
    </div>
  )
}

export default Footer
