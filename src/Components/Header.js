import React, { Component } from 'react';
import ImageHeader from "./image/logo-company.png";
import './Header.css';

class Header extends Component {
    render() { 
        return (
            <header className="container-xxl">
                <div className='header_block'>
                  <img className="logo_header" alt="logo" src={ImageHeader} />  
                  <h1 className="header__title">
                    Конкурсы ООО "Юнирост"
                </h1> 
                
                </div>
            </header>
        );
    }
}
 
export default Header;