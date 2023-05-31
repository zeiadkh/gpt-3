import React from 'react'
import './footer.css'
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-container">
        <h2 className='gradient__text'>Do you want to step in to the <br/> future before others</h2>
        <button>Request Early Access</button>
        <div className="gpt3__footer-container-lastcontainer">
          <div className="gpt3__footer-logo">
            <img src={logo}alt="footer-logo" />
            <span>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</span>
          </div>
          <ul title="links">
            <h4>Links</h4>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counties</li>
            <li>Contact</li>
          </ul>
          <ul title="company">
            <h4>Company</h4>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
          <ul title="Get in touch">
            <h4>Get in touch</h4>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
        <p>&copy; 2021 GPT-3. All rights reserved.</p>
    </div>
  );
}

export default Footer