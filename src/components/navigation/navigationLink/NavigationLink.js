import React, { Component } from 'react'
import './NavigationLink.css'

export default class NavigationLink extends Component {
  render () {
    const { title, content, url, logo, active } = this.props
    return (
      <a href={url !== '' ? url : `#${title}`} className={active ? 'active' : ''} onClick={this.props.handleOnClick}>
        <div className={'icon-link ' + logo} />
        {content}
      </a>
    )
  }
}
