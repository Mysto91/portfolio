import React, { Component } from 'react'
import './DropListContainer.css'

export default class DropListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listClass: 'list',
            arrowBtnClass: 'fa fa-angle-down fa-w-10 fa-5x drop-list'
        }
    }

    handleClickDropList = (event) => {
        this.setState(state => state.listClass === 'list' ? { listClass: state.listClass + ' responsive' } : { listClass: 'list' });
        this.setState(state => state.arrowBtnClass.includes('arrow-open') ? { arrowBtnClass: state.arrowBtnClass.replace('arrow-open', '') } : { arrowBtnClass: state.arrowBtnClass + ' arrow-open' });
    }

    render() {

        const { title, content } = this.props;

        return (
            <div className='drop-list-container'>
                <h2>{title}</h2>
                <div className={this.state.arrowBtnClass} onClick={this.handleClickDropList} />
                <div className={this.state.listClass}>
                    {
                        content
                    }
                </div>
            </div>
        )
    }
}
