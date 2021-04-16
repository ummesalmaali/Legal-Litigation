import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import LawInfo from '../LawInfo/LawInfo';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container w-100'>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            <LawInfo></LawInfo>
        </div>
    );
};

export default Header;