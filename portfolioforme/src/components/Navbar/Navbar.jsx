import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => handleScroll('hero')}>Home</li>
        <li onClick={() => handleScroll('about')}>About</li>
        <li onClick={() => handleScroll('portfolio')}>Portfolio</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
