import React, { Component } from 'react'
import Presentation from '../presentation/Presentation'
import './Body.css'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Presentation />
                <div className="transition-container"></div>
            </div>
        )
    }
}
