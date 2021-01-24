import React, { Component } from 'react';
import './Presentation.css';

export default class Presentation extends Component {
    render() {
        return (
            <div className="presentation-container">
                <div className="presentation-text">
                    <h1>
                        Bonjour et bienvenue !
                    </h1>
                    <p>
                        Je m'appelle
                        Etienne TRAN
                        Je suis un ingénieur spécialisé dans le développement web
                    </p>
                </div >
                <div className="presentation-image"></div >
            </div >
        )
    }
}
