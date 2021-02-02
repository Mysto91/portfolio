import React, { Component } from 'react'
import Card from '../card/Card'

export default class CardList extends Component {
  render () {
    const cardList = this.props.cardList
    return (
      <div>
        {
          Array.isArray(cardList) && cardList.map(card => <Card key={`card-${card.title}`} {...card} />)
        }
      </div>
    )
  }
}
