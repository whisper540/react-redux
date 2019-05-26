import React from 'react';
import logo from '../../../assets/imgs/logo.svg';
import './Header.css';

const Header = ()=>{
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
}

export default Header;