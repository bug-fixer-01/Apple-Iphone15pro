import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
   <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
   </main>
  )
}

export default App