import React, { Component } from 'react'
import './HtmlTag.css'

export default class HtmlTag extends Component {
  render () {
    const { content, color } = this.props
    return (
      <div className='tag-container'>
        <div className='tag-content'>
          <p>&lt;</p>
          <div style={{
            color: color !== '' ? color : 'white'
          }}
          >
            {content}
          </div>
          <p>/&gt;</p>
        </div>
      </div>
    )
  }
}
