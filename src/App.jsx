import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Support from './pages/Support'

import Pricing from './pages/Pricing'
import Register from './pages/Register'
import Login from './pages/Login'
import Contact from './pages/Contact'

const App = () => {
  return (
    
     <Router>
      <Navbar/>
      <Routes>
       <Route path='/'element={<Home/>} />
       <Route path='/about'element={<About/>} />
       <Route path='/support'element={<Support/>} />
       <Route path='/contact'element={<Contact/>} />
       <Route path='/pricing'element={<Pricing/>} />
       <Route path='/login'element={<Login/>} />
       <Route path='/register'element={<Register/>} />
      </Routes>
     </Router>
    
  )
}

export default App