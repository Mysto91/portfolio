import React, { Component } from 'react'
import Badge from '../../class/Badge'
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
        '/logo/logo-insa-cvl.png',
        [
          new Badge('Maths', '#1abc9c'),
          new Badge('Physique', '#34495e'),
          new Badge('Électronique', '#e67e22'),
          new Badge('Mécanique', '#8e44ad')
        ]
      ),
      new Card(
        '2017-2018',
        'Formation Écossaise qui m\'a enseigné les fondamentaux du développeur web.',
        '/logo/logo-university-of-dundee.png',
        [
          new Badge('php', '#34495e'),
          new Badge('html', '#e67e22'),
          new Badge('css', '#3498db'),
          new Badge('javascript', '#f1c40f'),
          new Badge('mysql', '#487eb0')
        ]
      )
    ]

    const cardList2 = [
      new Card(
        '2018-aujourd\'hui (plus de 2 ans)',
        'Orange Business Services',
        '/logo/logo-obs.png',
        [
          new Badge('php', '#34495e'),
          new Badge('laravel', '#e74c3c'),
          new Badge('zend', '#2ecc71'),
          new Badge('javascript', '#f1c40f'),
          new Badge('agilité', '#8e44ad'),
          new Badge('api', '#e67e22')
        ]
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
