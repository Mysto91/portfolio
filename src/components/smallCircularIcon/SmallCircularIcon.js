import React, { Component } from 'react'
import './SmallCircularIcon.css'

export default class SmallCircularIcon extends Component {
    render() {

        const { title, link } = this.props;

        return (
            <a href={link !== "" ? link : "#icon"}>
                <div className="small-icon">
                    <i className={title} aria-hidden="true"></i>
                </div>
            </a>
        )
    }
}
