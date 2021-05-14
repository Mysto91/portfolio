import React, { Component } from 'react'
import CardList from '../cardList/CardList'
import HtmlTag from '../htmlTag/HtmlTag'
import './HorizontalContainer.css'

export default class HorizontalContainer extends Component {
  render () {
    const { title, cardList, background, color, id } = this.props
    return (
      <div
        id={id}
        className='horizontal-container' style={{
          background: background !== '' ? background : ' #f4fefe',
          color: color !== '' ? color : 'white'
        }}
      >
        <h1>
          <HtmlTag content={title} color={color} />
        </h1>
        <CardList cardList={cardList} />
      </div>
    )
  }
}
