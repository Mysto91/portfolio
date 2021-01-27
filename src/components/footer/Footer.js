import React, { Component } from 'react';
import SmallCircularIcon from '../smallCircularIcon/SmallCircularIcon';
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
                        {
                            this.state.iconList.map(icon => <SmallCircularIcon key={icon.title} {...icon} />)
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
