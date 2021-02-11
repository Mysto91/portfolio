import React, { Component } from 'react'
import { menuLinkList } from '../../data/data';
import './Navigation.css';
import NavigationLinkList from './navigationLinkList/NavigationLinkList';

export default class Navigation extends Component {

    constructor(props) {
        super(props);

        this.defaultClass = 'topnav';
        this.closeClass = 'responsive-closed';
        this.openClass = 'responsive-open';

        this.state = {
            topNavClass: `${this.defaultClass} responsive-closed`,
            linkList: menuLinkList,
            clickDetected: this.props.clickDetected
        };
    }

    closeMenu = () => this.setState({ topNavClass: `${this.defaultClass} ${this.closeClass}` });

    openMenu = () => this.setState({ topNavClass: `${this.defaultClass} ${this.openClass}` });

    isOpen = () => !this.state.topNavClass.includes('responsive-closed');

    handleHamburgerClick = (event) => this.isOpen() ? this.closeMenu() : this.openMenu();

    handleLinkClick = (event) => this.closeMenu();

    componentDidUpdate = (prevProps, prevState) => {

        if (prevProps.clickDetected !== this.props.clickDetected) {
            if (this.isOpen())
                this.closeMenu();
            this.props.handleOnClick();
        }
    }

    render() {
        return (
            <div id="nav-bar" className="navigation">
                <div className={this.state.topNavClass} id="myTopnav">
                    <NavigationLinkList linkList={this.state.linkList} handleLinkClick={this.handleLinkClick} />
                </div>
                <a id="link-hamburger" href="#hamburger" className="icon" onClick={this.handleHamburgerClick}>
                    <div>
                        <i id="icon-hamburger" style={{ marginTop: '20px' }} className="fa fa-bars fa-2x"></i>
                    </div>
                </a>
            </div>
        )
    }
}
