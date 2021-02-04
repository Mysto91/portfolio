import React, { Component } from 'react'
import './DropListContainer.css'

export default class DropListContainer extends Component {

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

        const { title, content } = this.props;

        return (
            <div className='drop-list-container'>
                <h2>{title}</h2>
                <div className='fa fa-angle-down fa-w-10 fa-5x drop-list' onClick={this.handleClickDropList} />
                <div className={this.state.listClass}>
                    {
                        content
                    }
                </div>
            </div>
        )
    }
}
