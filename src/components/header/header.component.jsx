import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {HeaderContainer, LogoContainer} from './header.styles';

const Header = () => {
    return(
        <HeaderContainer>
            <LogoContainer>
                <Logo className="logo"/>
            </LogoContainer>
            <div className="header-links">
                <a href="" className="header-link">Browse Games</a>
                <a href="" className="header-link">About</a>
                <a href="" className="header-link">Sign In</a>
            </div>
        </HeaderContainer>
    )
}

export default Header;