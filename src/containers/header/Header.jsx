import React from 'react'
import './header.css'
import mask from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className="gpt3__header sec__padding">
      <div className="gpt3__header_container">
        <div className="gpt3__header_container-text">
          <h1 className="gradient__text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="gpt3__header_container-text-mail">
            <input
              type="email"
              placeholder="Your Email Address"
            />
            <button >Get Started</button>
          </div>
          <div className="gpt3__header_container-text-people">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="gpt3__header_container-mask">
          <img src={mask} alt="ai-mask" />
        </div>
      </div>
    </div>
  );
}

export default Header