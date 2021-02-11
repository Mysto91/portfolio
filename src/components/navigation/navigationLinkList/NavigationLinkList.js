import React, { Component } from 'react'
import { isScrollableLink, mergeArray, scroll } from '../../../util/function';
import NavigationLink from '../navigationLink/NavigationLink'

export default class NavigationLinkList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      linkList: this.props.linkList
    };
  }

  handleOnClick = (event) => {

    this.props.handleLinkClick();

    const linkList = [...this.state.linkList];

    const target = event.target;

    const href = target.getAttribute('href');

    if (isScrollableLink(href)) {

      scroll(target);

      const currentActiveLink = linkList.filter((link) => link.active === true);
      const newActiveLink = linkList.filter((link) => link.title === href.replace('#', ''));

      currentActiveLink[0].active = false;
      newActiveLink[0].active = true;

      this.setState({
        linkList: mergeArray(linkList, currentActiveLink.concat(newActiveLink))
      });
    }

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
