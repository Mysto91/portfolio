import React, { Component } from 'react'
import './SmallCircularIcon.css'

export default class SmallCircularIcon extends Component {
    render() {

        const { title, url } = this.props;
        return (
            <a href={url !== "" ? url : "#icon"}>
                <div className="small-icon">
                    <i className={title} aria-hidden="true"></i>
                </div>
            </a>
        )
    }
}
