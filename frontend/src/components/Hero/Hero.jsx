import React from 'react';
import './Hero.scss';
import itsMe from "../../assets/Images/itsMe.png"
import LinkedInIcon from '../../assets/icons/linkedin';
import GitHub from '../../assets/icons/github';
import GmailIcon from '../../assets/icons/gmail';

const Hero = () => {
  const handleDownload = () => {
    console.log('hi clicked');
    // Path to the local PDF file in the 'public' folder
    const pdfPath = "/pdf/cv.pdf";

    window.open(pdfPath, "_blank");
  }

  return (
    <section id="hero" className="hero-section">
      <div className='about_me'>
        <div className='name_wrapper'>
          <span className='occ'>SOFTWARE ENGINEER</span>
          <h1>MILAN MALSHIKA</h1>
          <div className='download-cv'>
            <button className='download-btn' onClick={handleDownload}>CV</button>
          </div>
        </div>
        <div className='desc'>
          <p className='about-me-dec'>Hi there, I'm a full stack software engineer. I work remotely and on site as well.</p>
        </div>
        <div className='desc'>
          <p className='about-me-dec'>milanmalshika22@gmail.com</p>
          <p className='about-me-dec'>+9475-542-8226</p>
        </div>
      </div>
      <div className='its-me'>
        <img src={itsMe} alt='milan malishka' />
      </div>
      <div className='social-media'>
        <ul>
          <li><a href='https://www.linkedin.com/in/milan-malshika-12a9861a1/' target="_blank"><LinkedInIcon size={40} color={"#000000"}/></a></li>
          <li><a href='https://github.com/milanmalshika' target="_blank">
            <GitHub size={40} color={"#000000"}/>
            </a></li>
          <li><a href='mailto:milanmalshika22@gmail.com'>
            <GmailIcon size={30}  color={"#000000"} />
            </a></li>

        </ul>
      </div>
    </section>
  );
};

export default Hero;
