import React from 'react';
import shamaLogo from '../components/shama.png';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <img src={shamaLogo} alt="Shama Logo" />
        <p>Made in Shama</p>
      </div>
    </footer>
  );
}

export default Footer;
