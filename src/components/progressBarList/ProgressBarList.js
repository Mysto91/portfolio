import React, { Component } from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import './ProgressBarList.css'

export default class ProgressBarList extends Component {
  render () {
    const { list } = this.props
    return (
      <div className='row-list'>
        {
                    Array.isArray(list) && list.map((row) => <ProgressBar key={row.title} {...row} />)
                }
      </div>
    )
  }
}
