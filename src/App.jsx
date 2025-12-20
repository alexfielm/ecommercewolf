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
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Hombre' element={<Hombre/>}/>
          <Route path='/Mujer' element={<Mujer/>}/>
          <Route path='/FaQ' element={<FaQ/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/Oferta' element={<Oferta/>}/>
          <Route path='/Carrito' element={<Cart/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
