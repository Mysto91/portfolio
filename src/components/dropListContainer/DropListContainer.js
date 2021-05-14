import React, { Component } from 'react'
import './DropListContainer.css'

export default class DropListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listClass: 'list',
            arrowBtnClass: 'fas fa-chevron-down fa-w-10 fa-3x drop-list'
        }
    }

    handleClickDropList = (event) => {
        this.setState(state => state.listClass === 'list' ? { listClass: state.listClass + ' responsive' } : { listClass: 'list' });
        this.setState(state => state.arrowBtnClass.includes('arrow-open') ? { arrowBtnClass: state.arrowBtnClass.replace('arrow-open', '') } : { arrowBtnClass: state.arrowBtnClass + ' arrow-open' });
    }

    handleMouseOverArrow = (event) => {
        this.setState({ arrowBtnClass: this.state.arrowBtnClass.replace('fa-3x', 'fa-4x') });
    }

    handleMouseOutArrow = (event) => {
        this.setState({ arrowBtnClass: this.state.arrowBtnClass.replace('fa-4x', 'fa-3x') });
    }


    render() {

        const { title, content } = this.props;
        const { arrowBtnClass, listClass } = this.state;

        return (
            <div className='drop-list-container'>
                <h2>{title}</h2>
                <div className={arrowBtnClass}
                    onClick={this.handleClickDropList}
                    onMouseOver={this.handleMouseOverArrow}
                    onMouseOut={this.handleMouseOutArrow}
                />
                <div className={listClass}>
                    {
                        content
                    }
                </div>
            </div>
        )
    }
}
