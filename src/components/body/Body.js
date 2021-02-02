import React, { Component } from 'react'
import { experienceCardList, formationCardList, skillLanguageList } from '../../data/data'
import HorizontalContainer from '../horizontalContainer/HorizontalContainer'
import Presentation from '../presentation/Presentation'
import SkillContainer from '../skillContainer/SkillContainer'
import './Body.css'

export default class Body extends Component {
  render () {
    return (
      <div>
        <Presentation />
        <SkillContainer title='MES COMPÉTENCES' progressBarList={skillLanguageList} background='#ecf0f1' />
        <HorizontalContainer title='MON PARCOURS SCOLAIRE' cardList={formationCardList} background='linear-gradient(#74b9ff, #ffffff)' />
        <HorizontalContainer title='MON PARCOURS PROFESSIONNEL' cardList={experienceCardList} background='white' />
      </div>
    )
  }
}
