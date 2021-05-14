import React, { Component } from 'react'
import Navigation from '../navigation/Navigation'
import './Header.css'

export default class Header extends Component {

  handleOnClick = () => {
    this.props.handleOnClick();
  }

  render() {

    const { className, clickDetected, changeParagraphDetected } = this.props;

    return (
      <div className={className}>
        <div className='logo-container'>
          <div className='logo'>Etienne TRAN</div>
        </div>
        <Navigation 
          clickDetected={clickDetected} 
          changeParagraphDetected={changeParagraphDetected} 
          handleOnClick={this.handleOnClick} 
        />
      </div>
    )
  }
}
