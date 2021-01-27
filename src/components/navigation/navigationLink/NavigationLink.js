import React, { Component } from 'react'
import './NavigationLink.css'

export default class NavigationLink extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, active, content } = this.props;

        return (
            <a href={`#${title}`} className={active ? 'active' : ''}>{content}</a>
        )
    }
}
