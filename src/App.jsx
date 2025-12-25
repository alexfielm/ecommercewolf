//import de librerias y css
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
//import de componentes fijos
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
//import de pages
import Home from './pages/Home/Home'
import Hombre from './pages/Hombre/Hombre'
import Mujer from './pages/Mujer/Mujer'
import FaQ from './pages/FaQ/FaQ'
import Oferta from './pages/Oferta/Oferta'
import Cart from './pages/Cart/Cart'
import ItemDetail from './pages/ItemDetail/ItemDetail'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Hombre' element={<Hombre />} />
          <Route path='/Mujer' element={<Mujer />} />
          <Route path='/FaQ' element={<FaQ />} />
          <Route path='/Oferta' element={<Oferta />} />
          <Route path='/Carrito' element={<Cart />} />
          <Route path='/ItemDetail' element={<ItemDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
