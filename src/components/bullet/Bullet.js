import React, { Component } from 'react'
import './Bullet.css'

export default class Bullet extends Component {
  render () {
    const { title, description, titleAdd } = this.props
    return (
      <div className='bullet-container'>
        <div className='bullet-title-container'>
          <div className='fa fa-check-circle' />
          <h3>{title}</h3>
          <div>{titleAdd}</div>
        </div>
        <p>{description}</p>
      </div>
    )
  }
}
