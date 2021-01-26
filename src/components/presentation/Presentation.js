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
                        Etienne TRAN,<br/>
                        Ingénieur spécialisé dans le développement web
                    </p>
                </div>
                <div className="profile-image">
                    <img src="images/me.png"></img>
                </div>
                <div className="presentation-image">
                    <div className="text-container opacity-black">
                        <p>&lt;Présentation/&gt;</p>
                    </div>
                </div>
            </div >
        )
    }
}
