import React, { Component } from 'react'
import './Navigation.css';
import NavigationLink from './navigationLink/NavigationLink';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topNavClass: 'topnav',
            menuList: [
                { title: 'presentation', active: true, content: 'Présentation' },
                { title: 'parcours', active: false, content: 'Parcours' },
                { title: 'creation', active: false, content: 'Création' },
                { title: 'github', active: false, content: 'Github' },
                { title: 'contact', active: false, content: 'Contact' },
            ]
        };
    }

    handleClick = (event) => {
        this.setState((state) => {
            if (state.topNavClass === 'topnav')
                return { topNavClass: state.topNavClass + ' responsive' };
            else
                return { topNavClass: 'topnav' };
        })
    }

    render() {
        return (
            <div id="nav-bar" className="navigation">
                <div className={this.state.topNavClass} id="myTopnav">
                    {
                        this.state.menuList.map(link => <NavigationLink key={`link-${link.title}`} {...link} />)
                    }
                    <a id="icon" href="#" className="icon" onClick={this.handleClick}>
                        <i className="fa fa-bars fa-2x"></i>
                    </a>
                </div>
            </div>
        )
    }
}
