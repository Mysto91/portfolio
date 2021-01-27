import React, { Component } from 'react'
import menuLink from './menuLink';
import './Navigation.css';
import NavigationLinkList from './navigationLinkList/NavigationLinkList';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topNavClass: 'topnav',
            linkList: [
                new menuLink('presentation', 'Présentation', '', true),
                new menuLink('parcours', 'Parcours', ''),
                new menuLink('creation', 'Création', ''),
                new menuLink('github', 'Github', ''),
                new menuLink('contact', 'Contact', '')
            ]
        };
    }

    handleClick = (event) => {
        this.setState(state => state.topNavClass === 'topnav' ? { topNavClass: state.topNavClass + ' responsive' } : { topNavClass: 'topnav' })
    }

    render() {
        return (
            <div id="nav-bar" className="navigation">
                <div className={this.state.topNavClass} id="myTopnav">
                    <NavigationLinkList linkList={this.state.linkList} />
                    <a id="icon" href="#hamburger" className="icon" onClick={this.handleClick}>
                        <i className="fa fa-bars fa-2x"></i>
                    </a>
                </div>
            </div>
        )
    }
}
