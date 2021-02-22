import React, { Component } from 'react'
import './Badge.css'

export default class Badge extends Component {
  render() {
    const { content, color } = this.props
    return (
      <span className='badge' style={{ background: color }}>
        {content}
      </span>
    )
  }
}
