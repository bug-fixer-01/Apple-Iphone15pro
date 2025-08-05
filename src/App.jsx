import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Model from './components/Model'
import Features from './components/Features'


gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
   <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
   </main>
  )
}

export default App