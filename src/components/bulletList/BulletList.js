import React, { Component } from 'react'
import Bullet from '../bullet/Bullet'
import './BulletList.css'

export default class BulletList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bulletListClass: 'bullet-list'
        };
    }

    handleClickDropList = (event) => {
        this.setState(state => state.bulletListClass === 'bullet-list' ? { bulletListClass: state.bulletListClass + ' responsive' } : { bulletListClass: 'bullet-list' })
    }

    render() {
        const { list, title } = this.props
        return (
            <div className='bullet-container'>
                <h2>{title}</h2>
                <div id='droplist-framework-btn' className='fa fa-angle-down fa-w-10 fa-5x drop-list' onClick={this.handleClickDropList} />
                <div className={this.state.bulletListClass}>
                    {
                        Array.isArray(list) && list.map((bullet) => <Bullet key={bullet.title} {...bullet} />)
                    }
                </div>
            </div>
        )
    }
}
