import React from 'react'
import './feature.css'

const Feature = (props) => {
  return (
    <div className="gpt3__feature">
      <h3 className='feature-title'>{props.title}</h3>
      <p className='feature-content'>{props.content}</p>
    </div>

    
  )
}

export default Feature