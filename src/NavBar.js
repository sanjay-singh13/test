import React from 'react';
import logo from './images/logo.svg';

const Navbar = () => {
  
  return (
    <nav>
      <div className='nav-center'>
        <div className="menu-list">
          <ul className='links'>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
        </div>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className="menu-list">
          <ul className='links'>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
