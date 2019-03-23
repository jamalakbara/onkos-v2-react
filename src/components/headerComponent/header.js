import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <Link to='/'>OnKos</Link>
                </div>
                <div className="nav-link">
                    <Link to='/'>home</Link>
                    <Link to='/catalog'>catalog</Link>
                    <Link to='/about'>about</Link>
                    <Link to='/contact'>contact</Link>
                </div>
            </nav>
        );
    }
}

export default Header;
