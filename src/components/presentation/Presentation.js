import React, { Component } from 'react'
import HtmlTag from '../htmlTag/HtmlTag'
import './Presentation.css'

export default class Presentation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tagMsg: ''
    }
  }

  showMsg = (msg, interval, index = 0) => {
    if (index < msg.length) {
      this.setState({ tagMsg: this.state.tagMsg + msg[index++] });
      setTimeout(() => this.showMsg(msg, interval, index), interval);
    }
  }

  componentDidMount() {
    this.showMsg("HELLO WORLD", 50);
  }

  render() {
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
            <HtmlTag content={this.state.tagMsg} />
          </div>
        </div>
      </div>
    )
  }
}
