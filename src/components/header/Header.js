import React, { Component } from 'react'
import Navigation from '../navigation/Navigation'
import './Header.css'

export default class Header extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <div className='logo-container'>
          <div className='logo'>Etienne TRAN</div>
        </div>
        <Navigation />
      </div>
    )
  }
}
