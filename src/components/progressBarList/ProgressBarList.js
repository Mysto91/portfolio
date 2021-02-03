import React, { Component } from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import './ProgressBarList.css'

export default class ProgressBarList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listClass: 'list'
    }
  }

  handleClickDropList = (event) => {
    this.setState(state => state.listClass === 'list' ? { listClass: state.listClass + ' responsive' } : { listClass: 'list' })
  }

  render() {
    const { list } = this.props
    return (
      <div className='progress-bar-container'>
        <h2>Langages</h2>
        <div id='droplist-language-btn' className='fa fa-angle-down fa-w-10 fa-5x drop-list' onClick={this.handleClickDropList} />
        <div className={this.state.listClass}>
          {
            Array.isArray(list) && list.map((row) => <ProgressBar key={row.title} {...row} />)
          }
        </div>
      </div>
    )
  }
}
