import React from 'react';
import '../sass/main.scss';
import Logo from '../img/Logo.svg';
import Divider from '../img/Divider.svg';
import {Link} from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={Logo} alt="logo" className='navbar-logo__prop' />
        </div>

        <div className='navbar-link'>
            <a href='#' className='navbar-link__link'>Products</a>
            <a href='#' className='navbar-link__link'>Features</a>
            <a href='#' className='navbar-link__link'>About</a>
            <a href='#' className='navbar-link__link'>Contact</a>

            <a href='#' className='navbar-link__login'>Login</a>

            <img src={Divider} alt="divider" className='navbar-link__divider' />

            <Link to = "/signup"> <button className='navbar-link__button'>Register</button> </Link>
        </div>
    </div>
  )
}

export default Navbar