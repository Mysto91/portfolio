import React, { Component } from 'react';
import SmallCircularIconList from '../smallCircularIconList/SmallCircularIconList';
import './Footer.css'

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iconList: [
                { title: 'fa fa-facebook', link: '' },
                { title: 'fa fa-linkedin', link: '' },
                { title: 'fa fa-instagram', link: '' },
                { title: 'fa fa-twitter', link: '' },
            ]
        }
    }

    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <SmallCircularIconList iconList={this.state.iconList} />
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-content">
                        <i className="fa fa-copyright">Copyright</i>
                    </div>
                </div>
            </footer>
        )
    }
}
