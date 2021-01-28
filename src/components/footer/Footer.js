import React, { Component } from 'react';
import SmallCircularIconList from '../smallCircularIconList/SmallCircularIconList';
import './Footer.css'
import smallCircularLink from './smallCircularLink';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iconList: [
                new smallCircularLink('fa fa-facebook', ''),
                new smallCircularLink('fa fa-linkedin', 'https://www.linkedin.com/in/etienne-tran-5468a2118'),
                new smallCircularLink('fa fa-instagram', ''),
                new smallCircularLink('fa fa-twitter', '')
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
