import React from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../../context/appContext';
import logo from "./img/logo.svg";
import logoCheck from "./img/checkout.png";
import './css/Header.css';


function Header (){
    const { state } = React.useContext(appContext);
    const { cart } = state;

    return(
        <header className="header">
            <div className="header__container">
                <Link to="/" >
                    <img className="header__container--img" src={logo} alt="logo" />
                </Link>

                <div className="header__container--input">
                    <input className="header__container--in" type="text" placeholder="Buscar"/>
                </div>

                <div className="header__container--login">
                    <p className="header__container--p">Inicia Sesión</p>
                    <p className="header__container--p">Regístrate</p>
                </div>
            </div>
            <div className="header__checkout">
                <Link className='header__checkout--link' to="/checkout">
                    <img className='header__checkout--cart' src={logoCheck} alt="cart" />
                </Link>

                {cart.length > 0 && <div className="header__checkout--alert">{cart.length}</div>}
            </div>
        </header>
    );
}

export { Header }