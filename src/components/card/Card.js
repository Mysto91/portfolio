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
                <h1>{title}</h1>
                <div>{image}</div>
                <p>{description}</p>
            </div>
        )
    }
}
