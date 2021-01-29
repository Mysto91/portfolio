import React, { Component } from 'react'
import NavigationLink from '../navigationLink/NavigationLink'

export default class NavigationLinkList extends Component {
  render () {
    const { linkList } = this.props

    return (
      <div>
        {linkList.map(link => <NavigationLink key={`link-${link.title}`} {...link} />)}
      </div>
    )
  }
}
