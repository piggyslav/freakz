import React, {Component} from 'react';
import logo from "../img/freakz_logo.svg";

class Header extends Component {
    render() {
        return (
            <header className="">
                <div className="header-gradient"></div>
                <div id="particles-js"></div>
                <img src={logo} className="logo" alt="logo"/>
            </header>
        );
    }
}

export default Header;