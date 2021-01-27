import React, { Component } from 'react';
import SmallCircularIcon from '../smallCircularIcon/SmallCircularIcon';
import './Footer.css'

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iconList: [
                { title: 'fa fa-facebook' },
                { title: 'fa fa-linkedin' },
                { title: 'fa fa-instagram' },
                { title: 'fa fa-twitter' },
            ]
        }
    }

    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        {
                            this.state.iconList.map(icon => <SmallCircularIcon key={icon.title} name={icon.title} />)
                        }
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
