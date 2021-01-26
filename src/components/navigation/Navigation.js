import React, { Component } from 'react'
import './Navigation.css';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navClass: 'navigation'
        };
    }

    handleClick = (event) => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }

    }

    render() {
        return (
            <div id="nav-bar" className={this.state.navClass}>
                <div className="topnav" id="myTopnav">
                    <a href="#home" className="active">Présentation</a>
                    <a href="#news">Parcours</a>
                    <a href="#contact">Création</a>
                    <a href="#github">Github</a>
                    <a href="#about">Contact</a>
                    <a id="icon" href="#" className="icon" onClick={this.handleClick}>
                        <i className="fa fa-bars fa-2x"></i>
                    </a>
                </div>
            </div>
        )
    }
}
