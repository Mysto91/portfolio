import React, { Component } from 'react'
import Bullet from '../bullet/Bullet'
import './BulletList.css'

export default class BulletList extends Component {
  render () {
    const { list } = this.props
    return (
      <div className='bullet-container'>
        <h2>Frameworks</h2>
        {
                    Array.isArray(list) && list.map((bullet) => <Bullet key={bullet.title} {...bullet} />)
                }
      </div>
    )
  }
}
