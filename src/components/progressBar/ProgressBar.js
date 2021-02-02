import React, { Component } from 'react'
import './ProgressBar.css'

export default class ProgressBar extends Component {
  render () {
    const { title, level } = this.props
    return (
      <div className='meter'>
        <span style={{ width: level * 100 + '%' }}>{title}</span>
      </div>
    )
  }
}
