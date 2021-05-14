import React, { Component } from 'react'
import Bullet from '../bullet/Bullet'
import './BulletList.css'

export default class BulletList extends Component {
  render () {
    const { list } = this.props
    return (
      <div className='bullet-container'>
        <div>
          {
                        Array.isArray(list) && list.map((bullet) => <Bullet key={bullet.title} {...bullet} />)
                    }
        </div>
      </div>
    )
  }
}
