import React from 'react'
import './App.css'
import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import ProductContainer from './components/ProductContainer'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartWidget from './components/CartWidget'

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <main>
        <Carousel />
        <ProductContainer />
        <Newsletter />
      </main>
      <Footer />
    </>

  )
}

export default App
