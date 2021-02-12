import React, { useEffect, useState } from 'react'
import './App.css'
import Body from './components/body/Body.js'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { getHeightPosition } from './util/function'

function App () {
  const [currentPos, setCurrentPos] = useState(0)
  const [headerClass, setHeaderClass] = useState('container')
  const [clickOutsideMenu, setClickOutsideMenu] = useState(false)

  function closeMenu (target) {
    if (target.getAttribute('id') === 'icon-hamburger') { return }

    const firstChild = target.firstChild

    if (firstChild !== undefined && firstChild !== null) {
      if (firstChild.id !== undefined && firstChild.getAttribute('id') === 'icon-hamburger') { return }
    }

    setClickOutsideMenu(true)
  }

  useEffect(() => {
    window.onscroll = (event) => {
      const newPos = getHeightPosition(event)
      setHeaderClass(newPos > currentPos ? 'container transparent' : 'container')
      setCurrentPos(newPos)
    }

    window.onclick = (event) => {
      closeMenu(event.target)
    }
  })

  function handleOnClickOutsideMenu (params) {
    setClickOutsideMenu(false)
  }

  return (
    <div className='App'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      <Header className={headerClass} clickDetected={clickOutsideMenu} handleOnClick={handleOnClickOutsideMenu} />
      <Body />
      <Footer />
    </div>
  )
}

export default App
