import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Comments from './components/Comments'
import Footer from './components/Footer'

function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Content />
      <Comments />
      <Footer />
    </div>
  )
}

export default App