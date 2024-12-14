import React from 'react';
import './About.scss';
import FaceBookIcon from '../../assets/icons/facebook';
import Instagram from '../../assets/icons/instagram';
import Xicon from '../../assets/icons/twitter';

const About = () => {
  return (
    <section id="about" className="hero-section">
    <div className='about_me'>
      <div className='name_wrapper'>
        <span className='occ'>FULL-STACK DEVELOPER</span>
        <h1>MILAN MALISHKA</h1>
        <div className='download-cv'>
          <button className='download-btn'>CV</button>
        </div>
      </div>
      <div className='desc'>
        <p className='about-me-dec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia, ab atque corrupti omnis cupiditate cum commodi voluptatum ducimus porro quaerat quo autem.</p>
      </div>
    </div>
    <div className='its-me'>
      {/* <img src={itsMe} alt='milan malishka' /> */}
    </div>
    <div className='social-media'>
      <ul>
        <li><a href='#'><FaceBookIcon size={32} color={"#000000"}/></a></li>
        <li><a href='#'>
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

export default About;
