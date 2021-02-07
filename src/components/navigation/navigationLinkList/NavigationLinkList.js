import React, { Component } from 'react'
import { mergeArray, scroll } from '../../../util/function';
import NavigationLink from '../navigationLink/NavigationLink'

export default class NavigationLinkList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      linkList: this.props.linkList
    };
  }

  handleOnClick = (event) => {
    const linkList = [...this.state.linkList];
    scroll(event.target);

    const currentActiveLink = linkList.filter((link) => link.active === true);
    const newActiveLink = linkList.filter((link) => link.title === event.target.getAttribute('href').replace('#', ''));

    currentActiveLink[0].active = false;
    newActiveLink[0].active = true;

    const update = currentActiveLink.concat(newActiveLink);

    this.setState({ linkList: mergeArray(linkList, update) });

  }

  render() {
    const linkList = this.state.linkList;
    return (
      <div>
        {Array.isArray(linkList) && linkList.map(link => <NavigationLink key={`link-${link.title}`} {...link} handleOnClick={this.handleOnClick} />)}
      </div>
    )
  }
}
