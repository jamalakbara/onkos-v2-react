import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="soc">
                    <div className="logo">OnKos</div>
                    <div className="sosmed">
                        <Link to='http://www.facebook.com/jamalakbara'><img src='/img/facebook.png' /></Link>
                        <Link to='twitter.com/jamalakbara'><img src='/img/twitter.png' /></Link>
                        <Link to='instagram.com/jamalakbara'><img src='/img/instagram.png' /></Link>
                    </div>
                </div>
                <div className="news">
                    <h3>newsletter</h3>
                    <p>Keep up with the latest company news and events. </p><p>Enter your e-mail and subscribe to our newsletter.</p>
                    <div className="email">
                        <input type="email" placeholder="Type your E-mail" />
                        <button>subscrice</button>
                    </div>
                </div>
                <span>OnKos © 2019</span>
            </footer>
        );
    }
}

export default Footer;
