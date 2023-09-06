import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Hompage'
import Portfolio from './pages/Portfolio'
import Landing from './pages/Landing'
import Blog from './pages/Blog'
import "./index.css"

function App() {

  return (
    <div className=" h-screen items-center">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/home' element={<Homepage/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
      
    </div>
  )
}

export default App
