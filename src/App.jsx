import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Myself from './Components/Myself'
import BentoGrid from './Components/BentoGrid'
import Timeline from './Components/Timeline'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Resume from './Components/Resume'

const Home = () => (
  <>
    <Hero />
    <Myself />
    <BentoGrid />
    <Timeline />
    <Testimonials />
    <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-black text-white font-sans selection:bg-purple-500/30'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App