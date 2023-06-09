import React from 'react'
import './possibility.css'
import image from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility sec__padding" id='possibility'>
      <div className="gpt3__possibility--container">
        <div className="gpt3__possibility--container-img">
          <img src={image} alt="possibility" loading='lazy'/>
        </div>
        <div className="gpt3__possibility--container-text">
          <p>Request Early Access to Get Started</p>
          <h3 className="gradient__text">
            The possibilities are <br/> beyond your imagination
          </h3>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  );
}

export default Possibility