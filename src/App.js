import React from 'react'
import './App.css'
import Body from './components/body/Body.js'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App () {
  return (
    <div className='App'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
