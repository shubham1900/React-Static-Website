import React from 'react'
import {Footer,Blog,Possiblity,Features,WhatGPT3,Header} from './containers'
import { Article,Brand,Cta,Feature,Navbar } from './components'
import './app.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>

        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possiblity/>
      <Cta/>
      <Blog/>
      <Footer/>
        
    </div>
  )
}

export default App