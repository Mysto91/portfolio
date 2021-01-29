import React, { Component } from 'react'
import './HtmlTag.css'

export default class HtmlTag extends Component {
  render () {
    const content = this.props.content
    return (
      <div className='tag-container'>
        <div className='tag-content'>
          <p>&lt;</p>
          <div>{content}</div>
          <p>/&gt;</p>
        </div>
      </div>
    )
  }
}
