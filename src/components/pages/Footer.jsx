import React from 'react'
import logo from "../../Assets/Logo.svg";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa"



const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className='footer-logo-container'>
          <img src={logo} alt='' />
        </div>
        <div className='footer-icons'>
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebook />
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Career</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>

        <div className='footer-section-columns'>
          <span>9076944738</span>
          <span>foodies@gmail.com</span>
          <span>vidya1234@gmail.com</span>
          <span>contactF@gmail.com</span>

        </div>
        <div className='footer-section-columns'>
          <span> Terms Condition</span>
          <span>Privacy Policy </span>
        </div>
      </div>
    </div>
  )
}
export default Footer;
