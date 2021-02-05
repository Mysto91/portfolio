import React, { Component } from 'react'
import HtmlTag from '../htmlTag/HtmlTag'
import './Presentation.css'

export default class Presentation extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    const profileImage = './images/me.png'
    const backgroundImage = './images/triangle-background.jpg'

    return (
      <div className='presentation-container' style={{ backgroundImage: `url('${backgroundImage}')` }}>
        <div className='presentation-text filter-low'>
          <h1>
            ETIENNE TRAN
          </h1>
          <p>
            Ingénieur dans le développement web
          </p>
        </div>
        <div className='profile-image filter-low'>
          <div className='wrap-image'>
            <img src={profileImage} alt='profile' />
          </div>
        </div>
        <div className='presentation-image'>
          <div className='text-container filter-medium'>
            <HtmlTag content='HELLO WORLD' />
          </div>
        </div>
      </div>
    )
  }
}
