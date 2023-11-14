import logo from "./img/logo.svg";
import './css/Header.css';


function Header (){
    return(
        <header className="header">
            <div className="header__container">
                <img className="header__container--img" src={logo} alt="logo" />
                
                <div className="header__container--input">
                    <input className="header__container--in" type="text" placeholder="Buscar"/>
                </div>

                <div className="header__container--login">
                    <p className="header__container--p">Inicia Sesión</p>
                    <p className="header__container--p">Regístrate</p>
                </div>
            </div>
            <div className="header__checkout">

            </div>
        </header>
    );
}

export { Header }