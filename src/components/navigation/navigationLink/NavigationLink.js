import React, { Component } from 'react'
import { scroll } from '../../../util/function';
import './NavigationLink.css'

export default class NavigationLink extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.active
    }
  }

  handleOnClick = (event) => {
    scroll(event.target);
    this.setState((state) => state.active ? { isActive: false } : { isActive: true });
  }

  render() {
    const { title, content, url, logo } = this.props
    return (
      <a href={url !== '' ? url : `#${title}`} className={this.state.isActive ? 'active' : ''} onClick={this.handleOnClick}>
        <div className={'icon-link ' + logo} />
        {content}
      </a>
    )
  }
}
