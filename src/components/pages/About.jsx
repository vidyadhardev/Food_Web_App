import React from 'react'
import AboutBackground from "../../Assets/about-background.png";
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFill0CircleFill } from 'react-icons/bs';
const About = () => {
  return (
    <div className='about-section-container' id='about'>
      <div className='about-background-image-container'>
        <img src={AboutBackground} alt='backgroundImage' />
      </div>
      <div className='about-section-image-container'>
        <img src={AboutBackgroundImage} alt='' />
      </div>
      <div className='about-section-text-container'>
        <p className='primary-subheading'>About </p>
        <h1 className='primary-heading'>
          Food Is An Important Part of A Balance Diet
        </h1>
        <p className='primary-text'>
          Healhty switcher chefs do all the pre work , like peading ,Chopping
          & marinating ,so you  can cook a fresh food .
        </p>
<p className='primary-text'>
switcher chefs do all the pre work , like peading ,Chopping
          & marinating ,so you  can cook a 
</p>
<div className='about-buttons-container'>
  <button className='secondary-button'>Learn More</button>
  <button className='watch-video-button'>Watch Video<BsFill0CircleFill/></button>
</div>
      </div>
    </div>
  )
}

export default About