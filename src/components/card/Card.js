import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, image, description} = this.props;

        return (
            <div className="card">
                <div className="image-container">
                    <img src={`/images/${image}`}></img>
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}
