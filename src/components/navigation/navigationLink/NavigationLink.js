import React, { Component } from 'react'
import './NavigationLink.css'

export default class NavigationLink extends Component {
  render () {
    const { title, active, content, url, logo } = this.props

    return (
      <a href={url !== '' ? url : `#${title}`} className={active ? 'active' : ''}>
        <div className={'icon-link ' + logo} style={{ display: 'inline-block' }} />
        {content}
      </a>
    )
  }
}
