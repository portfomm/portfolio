import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
        <div className='mainLogo'>
            <h1>Milan Malishka</h1>
        </div>
      <ul>
        <li onClick={() => handleScroll('hero')}>Home</li>
        <li onClick={() => handleScroll('about')}>About</li>
        <li onClick={() => handleScroll('portfolio')}>Portfolio</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
    <div className="controller_Section">
        <button>Contact us</button>
    </div>
    </nav>
  );
};

export default Navbar;