import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../../assets/images/star-bucks.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',  
    alignItems: 'center',  
    padding: '10px 20px',  
    backgroundColor: '#fff',  
  };

  // Inline style for the logo
  const logoStyle = {
    width: '120px',  
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',  
    padding: 0,  
  };

  // Inline style for each link
  const linkStyle = {
    margin: '0 15px',  // Adds space between links
    textDecoration: 'none',  // Removes underline from links
    color: '#333',  // Link color
    fontSize: '16px',  // Font size for links
  };

  // Inline style for the hamburger menu for mobile screens
  const hamburgerStyle = {
    display: 'none', // Default hidden
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '25px',
    height: '20px',
    cursor: 'pointer',
  };

  // Show hamburger menu on mobile screens
  const hamburgerBarStyle = {
    height: '4px',
    backgroundColor: '#333',
    borderRadius: '2px',
  };

  // Show hamburger menu on smaller screens
  const mobileHamburgerStyle = {
    ...hamburgerStyle,
    display: 'flex', // Make it visible for smaller screens
  };

  // Adjusting the layout when the menu is open
  const menuActiveStyle = {
    display: menuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '60px',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo */}
      <div className="logo" style={logoStyle}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation Links (inline) */}
      <div className="nav-links" style={navLinksStyle}>
        <ul>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/services" style={linkStyle}>Services</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </div>

      {/* Hamburger Button (mobile only) */}
      <div className="hamburger" onClick={toggleMenu} style={mobileHamburgerStyle}>
        <div style={hamburgerBarStyle}></div>
        <div style={hamburgerBarStyle}></div>
        <div style={hamburgerBarStyle}></div>
      </div>

      {/* Mobile menu when hamburger is clicked */}
      <div className="mobile-menu" style={menuActiveStyle}>
        <ul>
          <li><Link to="/" style={linkStyle} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" style={linkStyle} onClick={toggleMenu}>About</Link></li>
          <li><Link to="/services" style={linkStyle} onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/contact" style={linkStyle} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
