//import de librerias y css
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
//import de componentes fijos
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
//import de pages
import Home from './pages/Home'
import Hombre from './pages/Hombre'
import Mujer from './pages/Mujer'
import FaQ from './pages/FaQ'
import Contacto from './pages/Contacto'
import Oferta from './pages/Oferta'

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Hombre' element={<Hombre/>}></Route>
          <Route path='/Mujer' element={<Mujer />}></Route>
          <Route path='/FaQ' element={<FaQ />}></Route>
          <Route path='/Contacto' element={<Contacto />}></Route>
          <Route path='/Oferta' element={<Oferta />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
