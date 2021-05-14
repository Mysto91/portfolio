import React, { Component } from 'react'
import SmallCircularIconList from '../smallCircularIconList/SmallCircularIconList'
import './Footer.css'
import SmallCircularLink from './SmallCircularLink'

export default class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      iconList: [
        new SmallCircularLink('fa fa-facebook', ''),
        new SmallCircularLink('fa fa-linkedin', 'https://www.linkedin.com/in/etienne-tran-5468a2118'),
        new SmallCircularLink('fa fa-instagram', ''),
        new SmallCircularLink('fa fa-twitter', '')
      ]
    }
  }

  render () {
    return (
      <footer id='id-contact'>
        <div className='footer-container'>
          <div className='footer-content'>
            <SmallCircularIconList iconList={this.state.iconList} />
          </div>
        </div>
        <div className='footer-container'>
          <div className='footer-content'>
            <i className='fa fa-copyright'>Copyright</i>
          </div>
        </div>
      </footer>
    )
  }
}
