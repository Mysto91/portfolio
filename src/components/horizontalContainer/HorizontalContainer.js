import React, { Component } from 'react'
import CardList from '../cardList/CardList'
import './HorizontalContainer.css'

export default class HorizontalContainer extends Component {
  render () {
    const { title, cardList } = this.props

    return (
      <div className='horizontal-container'>
        <h1>&lt;{title}/&gt;</h1>
        <CardList cardList={cardList} />
      </div>
    )
  }
}
