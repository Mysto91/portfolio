import React, { Component } from 'react'
import { menuLinkList } from '../../data/data';
import './Navigation.css';
import NavigationLinkList from './navigationLinkList/NavigationLinkList';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topNavClass: 'topnav',
            linkList: menuLinkList
        };
    }

    handleClick = event => {
        this.setState(state => state.topNavClass === 'topnav' ? { topNavClass: state.topNavClass + ' responsive' } : { topNavClass: 'topnav' })
    }

    render() {
        return (
            <div id="nav-bar" className="navigation">
                <div className={this.state.topNavClass} id="myTopnav">
                    <NavigationLinkList linkList={this.state.linkList} />
                </div>
                <a id="icon" href="#hamburger" className="icon" onClick={this.handleClick}>
                    <div style={{ width: '100px', height: '100%' }}>
                        <i style={{ marginTop: '20px' }} className="fa fa-bars fa-2x"></i>
                    </div>
                </a>
            </div>
        )
    }
}
