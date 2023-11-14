import logo_background from './img/logo_background.svg';
import "./css/Footer.css";

function Footer(){
    return(
        <footer className="footer">
            <div className='footer__container'>
                <img src={logo_background} alt="logo_fondo" />
                <div className="footer__container--p">
                    <p className="footer__p">ClotheShop config Merch</p>
                    <p className="footer__p">Todos los artículos son reservados con pago anticipado, no devolvemos dinero</p>
                </div>
            </div>
        </footer>
    )
}

export { Footer }