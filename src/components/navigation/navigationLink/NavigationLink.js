import React, { Component } from 'react'
import { scroll } from '../../../util/function';
import './NavigationLink.css'

export default class NavigationLink extends Component {

  handleOnClick = (event) => scroll(event.target)

  render() {
    const { title, active, content, url, logo } = this.props
    return (
      <a href={url !== '' ? url : `#${title}`} className={active ? 'active' : ''} onClick={this.handleOnClick}>
        <div className={'icon-link ' + logo} style={{ display: 'inline-block' }} />
        {content}
      </a>
    )
  }
}
