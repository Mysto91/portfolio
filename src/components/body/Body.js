import React, { Component } from 'react'
import { experienceCardList, formationCardList } from '../../data/data'
import HorizontalContainer from '../horizontalContainer/HorizontalContainer'
import Presentation from '../presentation/Presentation'
import SkillContainer from '../skillContainer/SkillContainer'
import './Body.css'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Presentation />
        <SkillContainer title='MES COMPÉTENCES' color='rgb(36, 46, 66)' />
        <HorizontalContainer title='MON PARCOURS SCOLAIRE' cardList={formationCardList} background='rgb(36, 46, 66)' color='white' />
        <HorizontalContainer title='MON PARCOURS PROFESSIONNEL' cardList={experienceCardList} background='white' color='rgb(36, 46, 66)' />
      </div>
    )
  }
}
