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
  const [changeParagraph, setChangeParagraph] = useState(null)

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

      const paragraphVisible = getParagraphVisible();

      if (paragraphVisible) {
          setChangeParagraph(paragraphVisible);
      }
    }

    window.onclick = (event) => {
      closeMenu(event.target)
    }
  })

  function handleOnClickOutsideMenu (params) {
    setClickOutsideMenu(false)
  }

  function isScrolledIntoView(elementId) {
    const rect = document.getElementById(elementId).getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
  }

  function getParagraphVisible() {

    if (isScrolledIntoView('id-presentation')) {
      return 'presentation';
    }

    if (isScrolledIntoView('id-skill')) {
      return 'skill';
    }

    if (isScrolledIntoView('id-study')) {
      return 'study';
    }

    if (isScrolledIntoView('id-experience')) {
      return 'experience';
    }

    if (isScrolledIntoView('id-contact')) {
      return 'contact';
    }

    return null;
  }

  return (
    <div className='App'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      <Header 
        className={headerClass} 
        clickDetected={clickOutsideMenu} 
        changeParagraphDetected={changeParagraph} 
        handleOnClick={handleOnClickOutsideMenu} 
      />
      <Body />
      <Footer />
    </div>
  )
}

export default App
