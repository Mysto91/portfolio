import React, { Component } from 'react'
import Card from '../card/Card'

export default class CardList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => <Card key={`card-${card.title}`} {...card} />)
                }
            </div>
        )
    }
}
