import React from 'react';
import awashLogo from '../components/awash.png'
import teleLogo from '../components/telegram.png'
import facebookLogo from '../components/fb.png'
import instaLogo from '../components/insta.png'
import youLogo from '../components/you.png'
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logoLeft">
        <a href="https://www.example.com">
          <img src={awashLogo} alt="Logo 1" /> 
        </a>
      </div>

      <div className="logoRight">
        <a href="https://www.telegram.com">
          <img src={teleLogo} alt="Telegram" />
        </a>
        <a href="https://www.facebook.com">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com">
          <img src={instaLogo} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com">
          <img src={youLogo} alt="YouTube" />
        </a>
      </div>
    </header>
  );
}

export default Header;



