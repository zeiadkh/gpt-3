import React from 'react'
import {Blog, Features, Footer, Header, What, Possibility} from './containers'
import {Brand, CTA, Navbar} from './components'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App