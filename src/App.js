import React, { useEffect, useState } from 'react'
import './App.css'
import Body from './components/body/Body.js'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { getHeightPosition } from './util/function'

function App () {
  const [currentPos, setCurrentPos] = useState(0)
  const [headerClass, setHeaderClass] = useState('container')

  useEffect(() => {
    window.onscroll = (event) => {
      const newPos = getHeightPosition(event)
      setHeaderClass(newPos > currentPos ? 'container transparent' : 'container')
      setCurrentPos(newPos)
    }
  })

  return (
    <div className='App'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      <Header className={headerClass} />
      <Body />
      <Footer />
    </div>
  )
}

export default App
