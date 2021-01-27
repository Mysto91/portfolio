import React, { Component } from 'react'
import './Navigation.css';
import NavigationLinkList from './navigationLinkList/NavigationLinkList';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topNavClass: 'topnav',
            linkList: [
                { title: 'presentation', active: true, content: 'Présentation', url: '' },
                { title: 'parcours', active: false, content: 'Parcours', url: '' },
                { title: 'creation', active: false, content: 'Création', url: '' },
                { title: 'github', active: false, content: 'Github', url: '' },
                { title: 'contact', active: false, content: 'Contact', url: '' },
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
