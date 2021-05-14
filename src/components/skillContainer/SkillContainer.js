import React, { Component } from 'react'
import { frameworkBulletList, skillLanguageList } from '../../data/data'
import BulletList from '../bulletList/BulletList'
import DropListContainer from '../dropListContainer/DropListContainer'
import HtmlTag from '../htmlTag/HtmlTag'
import ProgressBarList from '../progressBarList/ProgressBarList'
import './SkillContainer.css'

export default class SkillContainer extends Component {
  render () {
    const { title, background, color } = this.props

    return (
      <div id='id-skill' className='skill-container' style={{ background: background !== '' ? background : ' #f4fefe' }}>
        <div className='skill-title-container'>
          <h1>
            <HtmlTag content={title} color={color} />
          </h1>
        </div>
        <DropListContainer title='Frameworks' content={<BulletList title='Frameworks' list={frameworkBulletList} />} />
        <DropListContainer title='Langages' content={<ProgressBarList list={skillLanguageList} />} />
      </div>
    )
  }
}
