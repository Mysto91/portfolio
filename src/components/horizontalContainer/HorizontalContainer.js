import React, { Component } from 'react'
import CardList from '../cardList/CardList'
import HtmlTag from '../htmlTag/HtmlTag'
import './HorizontalContainer.css'

export default class HorizontalContainer extends Component {
  render () {
    const { title, cardList } = this.props

    return (
      <div className='horizontal-container'>
        <h1>
          <HtmlTag content={title} />
        </h1>
        <CardList cardList={cardList} />
      </div>
    )
  }
}
