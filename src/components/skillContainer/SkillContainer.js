import React, { Component } from 'react'
import { frameworkBulletList, skillLanguageList } from '../../data/data'
import BulletList from '../bulletList/BulletList'
import HtmlTag from '../htmlTag/HtmlTag'
import ProgressBarList from '../progressBarList/ProgressBarList'
import './SkillContainer.css'

export default class SkillContainer extends Component {
  render () {
    const { title, background } = this.props

    return (
      <div className='skill-container' style={{ background: background !== '' ? background : ' #f4fefe' }}>
        <div className='skill-title-container'>
          <h1>
            <HtmlTag content={title} />
          </h1>
        </div>
        <BulletList title='Frameworks' list={frameworkBulletList} />
        <ProgressBarList list={skillLanguageList} />
      </div>
    )
  }
}
