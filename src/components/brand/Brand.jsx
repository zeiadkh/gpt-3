import React from 'react'
import './brand.css'
import { google, shopify, dropbox, atlassian, slack,  } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand sec__padding'>
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </div>
  )
}

export default Brand