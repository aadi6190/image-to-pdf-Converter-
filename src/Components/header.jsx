import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Online JPG to PDF Converter</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#tools">Made by aadesh singh</a></li>
          <li><a href="#signin">Sign In</a></li>
          <li><a href="#signup" className="sign-up-button">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
