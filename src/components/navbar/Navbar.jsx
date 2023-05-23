import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from "../../assets/logo.svg"
import { useState } from 'react'



const Navbar = () => {

  const Links = () => {
    return (
      <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#whatgpt'>What is GPT?</a></p>
        <p><a href='#possibility'>Open Ai</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
      </>

    )
  }
  const [toggled, setToggled] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links-container">
          <Links />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign Up</button>
        </div>
      </div>

      <div className="gpt3__navbar-menu">
        {!toggled ? (
          <RiMenu3Line
            size={30}
            color="#fff"
            onClick={() => setToggled(true)}
          />
        ) : (
          <RiCloseLine
            size={30}
            color="#fff"
            onClick={() => setToggled(false)}
          />
        )}

        {toggled && (
          <div className="scale-up-center">
            <div className="gpt3__navbar-menu-container">
              <div className="gpt3__navbar-menu-links">
                <Links />
              </div>

              <div className="gpt3__navbar-menu-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar