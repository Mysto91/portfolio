import React, { Component } from 'react'
import { experienceCardList, formationCardList } from '../../data/data'
import HorizontalContainer from '../horizontalContainer/HorizontalContainer'
import Presentation from '../presentation/Presentation'
import './Body.css'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Presentation />
        <HorizontalContainer title='Mon parcours scolaire' cardList={formationCardList} background='linear-gradient(#74b9ff, #ffffff)' />
        <HorizontalContainer title='Mon parcours professionnel' cardList={experienceCardList} background='white' />
      </div>
    )
  }
}
