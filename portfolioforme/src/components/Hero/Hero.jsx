import React from 'react';
import './Hero.scss';
import itsMe from "../../assets/Images/itsMe.png"
import FaceBookIcon from '../../assets/icons/facebook';
import Instagram from '../../assets/icons/instagram';
import Xicon from '../../assets/icons/twitter';

const Hero = () => {
  const handleSubmit = () => {
    console.log('hi clicked');
  }

  return (
    <section id="hero" className="hero-section">
      <div className='about_me'>
        <div className='name_wrapper'>
          <span className='occ'>SOFTWARE ENGINEER</span>
          <h1>MILAN MALSHIKA</h1>
          <div className='download-cv'>
            <button className='download-btn' onClick={handleSubmit}>CV</button>
          </div>
        </div>
        <div className='desc'>
          <p className='about-me-dec'>Hi there, I'm a full stack software engineer. I work remotely and on site as well.</p>
        </div>
      </div>
      <div className='its-me'>
        <img src={itsMe} alt='milan malishka' />
      </div>
      <div className='social-media'>
        <ul>
          <li><a href='https://www.linkedin.com/in/milan-malshika-12a9861a1/' target="_blank"><FaceBookIcon size={32} color={"#000000"}/></a></li>
          <li><a href='https://github.com/milanmalshika' target="_blank">
            <Instagram size={32} color={"#000000"}/>
            </a></li>
          <li><a href='#'>
            <Xicon size={32}  color={"#000000"} />
            </a></li>

        </ul>
      </div>
    </section>
  );
};

export default Hero;
