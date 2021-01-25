import React, { Component } from 'react'
import HorizontalContainer from '../horizontalContainer/HorizontalContainer'
import Presentation from '../presentation/Presentation'
import './Body.css'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Presentation />
                <HorizontalContainer />
            </div>
        )
    }
}
