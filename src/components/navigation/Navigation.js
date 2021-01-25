import React, { Component } from 'react'
import './Navigation.css';

export default class Navigation extends Component {

    handleClick = () => {
        console.log("gérer le clique");
    }

    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><a className="responsive-link active" href="#">Présentation</a></li>
                    <li><a className="responsive-link" href="#">Parcours</a></li>
                    <li><a className="responsive-link" href="#">Création</a></li>
                    <li><a className="responsive-link" href="#">Github</a></li>
                    <li><a className="responsive-link" href="#">Contact</a></li>
                    <li>
                        <a href="#" className="nav-icon" onClick={this.handleClick}>
                            <i className="fa fa-bars fa-w-14 fa-3x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
