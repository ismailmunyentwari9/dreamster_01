import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Service from './pages/service'
import Contact from './pages/contact'
import Nav from './components/nav'

export default function App() {
  return (
    <div>
     
      
     <Router>
        <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </Router>
    </div>
  )
}
