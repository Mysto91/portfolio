import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <a href="#">
                            <div className="small-icon">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div className="small-icon">
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div className="small-icon">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer-content">
                        <i class="fa fa-copyright">Copyright</i>
                    </div>
                </div>
            </footer>
        )
    }
}
