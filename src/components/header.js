import React from 'react';
import amharaLogo from '../components/amhara bank.png'
import teleLogo from '../components/telegram.png'
import facebookLogo from '../components/fb.png'
import instaLogo from '../components/insta.png'
import youLogo from '../components/you.png'
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logoLeft">
        <a href="https://www.amharabank.com.et/">
          <img src={amharaLogo} alt="Logo 1" /> 
        </a>
      </div>

      <div className="logoRight">
        <a href="https://t.me/Amhara_Banksc">
          <img src={teleLogo} alt="Telegram" />
        </a>
        <a href="https://www.facebook.com/amharabanksc1">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/amhara_bank/">
          <img src={instaLogo} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/channel/UC73x9uuGYV0Uxw0EkpVZN8g">
          <img src={youLogo} alt="YouTube" />
        </a>
      </div>
    </header>
  );
}

export default Header;



