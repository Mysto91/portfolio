import React, { Component } from 'react'
import './Navigation.css';

export default class Navigation extends Component {
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
                        <a href="javascript:void(0);" class="nav-icon" onclick="functionAFaire()">
                            <i class="fa fa-bars fa-w-14 fa-3x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
