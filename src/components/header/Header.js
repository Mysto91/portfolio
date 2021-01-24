import React, { Component } from 'react'
import Navigation from '../navigation/Navigation';
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="logo-container">
                    <div className="logo">Etienne TRAN<br />Développeur web full stack</div>
                </div>
                <Navigation />
            </div>
        )
    }
}
