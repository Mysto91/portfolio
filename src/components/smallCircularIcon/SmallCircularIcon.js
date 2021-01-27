import React, { Component } from 'react'
import './SmallCircularIcon.css'

export default class SmallCircularIcon extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a href="#">
                <div className="small-icon">
                    <i className={this.props.name} aria-hidden="true"></i>
                </div>
            </a>
        )
    }
}
