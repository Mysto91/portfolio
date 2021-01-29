import React, { Component } from 'react'
import Badge from '../badge/Badge'
import './Card.css'

export default class Card extends Component {
  render () {
    const { title, image, description } = this.props

    const badgeList = (this.props.badgeList) ? this.props.badgeList : []

    return (
      <div className='card'>
        <div className='image-container'>
          <img src={`/images/${image}`} alt={this.props.title} />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        {
          badgeList.length > 0 &&
            <div className='badge-container'>
              {badgeList.map((badge) => <Badge key={badge.content} {...badge} />)}
            </div>
        }

      </div>
    )
  }
}
