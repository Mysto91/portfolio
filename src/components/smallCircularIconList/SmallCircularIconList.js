import React, { Component } from 'react'
import SmallCircularIcon from '../smallCircularIcon/SmallCircularIcon';

export default class SmallCircularIconList extends Component {
    render() {

        return (
            <div>
                {this.props.iconList.map(icon => <SmallCircularIcon key={icon.title} {...icon} />)}
            </div>
        )
    }
}
