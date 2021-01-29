import React, { Component } from 'react'
import Card from '../../class/Card'
import HorizontalContainer from '../horizontalContainer/HorizontalContainer'
import Presentation from '../presentation/Presentation'
import './Body.css'

export default class Body extends Component {
  render () {
    const cardList = [
      new Card(
        '2013-2018',
        'Formation d\'ingénieur généraliste dans laquelle j\'ai pu découvrir l\'ensemble des domaines de l\'ingénierie.',
        '/logo/logo-insa-cvl.png'
      ),
      new Card(
        '2017-2018',
        'Formation Écossaise qui m\'a enseigné les fondamentaux du développeur web.',
        '/logo/logo-university-of-dundee.png'
      )
    ]

    const cardList2 = [
      new Card(
        '2018-aujourd\'hui (plus de 2 ans)',
        'Orange Business Services',
        '/logo/logo-obs.png'
      )
    ]

    return (
      <div>
        <Presentation />
        <HorizontalContainer title='Mon parcours scolaire' cardList={cardList} background='linear-gradient(#74b9ff, #ffffff)' />
        <HorizontalContainer title='Mon parcours professionnel' cardList={cardList2} background='white' />
      </div>
    )
  }
}
