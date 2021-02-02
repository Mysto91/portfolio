import React, { Component } from 'react'
import HtmlTag from '../htmlTag/HtmlTag'
import './Presentation.css'

export default class Presentation extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const profileImage = './images/me.png'
    const laptopImage = './images/laptop.jpg'

    return (
      <div className='presentation-container'>
        <div className='presentation-text'>
          <h1>
            ETIENNE TRAN
          </h1>
          <p>
            Ingénieur dans le développement web
          </p>
        </div>
        <div className='profile-image'>
          <div className='wrap-image'>
            <img src={profileImage} alt='profile' />
          </div>
        </div>
        <div className='presentation-image' style={{ backgroundImage: `url('${laptopImage}')` }}>
          <div className='text-container opacity-black'>
            <HtmlTag content='PRÉSENTATION' />
          </div>
        </div>
      </div>
    )
  }
}
