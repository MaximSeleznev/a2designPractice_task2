import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom'
import '../../styles/header.sass'

const Header = () => {
    return (
        <header>
            <LogoIcon/>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/people'>People</Link>
                <Link to='/feed'>Feed</Link>
            </nav>
            
        </header>
    );
};

export default Header;