import React, { Component } from 'react'
import HtmlTag from '../htmlTag/HtmlTag'
import ProgressBarList from '../progressBarList/ProgressBarList'
import './SkillContainer.css'

export default class SkillContainer extends Component {
  render () {
    const { title, background, progressBarList } = this.props
    return (
      <div className='horizontal-container' style={{ background: background !== '' ? background : ' #f4fefe' }}>
        <h1>
          <HtmlTag content={title} />
        </h1>
        <ProgressBarList list={progressBarList} />
      </div>
    )
  }
}
