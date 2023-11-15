import { Link } from 'react-router-dom';
import './css/Information.css';

function Information (){
    return(
        <div className="information">
            <div className="information__content">
                <div className="information__content--head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="information__content--form">
                    <form action="">
                        <input className='information__content--input' type="text" placeholder="Nombre completo" name="name"/>
                        <input className='information__content--input' type="text" placeholder="Correo" name="email"/>
                        <input className='information__content--input' type="text" placeholder="Dirección" name="address"/>
                        <input className='information__content--input' type="text" placeholder="Apto" name="apto"/>
                        <input className='information__content--input' type="text" placeholder="Ciudad" name="city"/>
                        <input className='information__content--input' type="text" placeholder="Pais" name="country"/>
                        <input className='information__content--input' type="text" placeholder="Estado" name="state"/>
                        <input className='information__content--input' type="text" placeholder="Codigo postal" name="cp"/>
                        <input className='information__content--input' type="text" placeholder="Teléfono" name="phone"/>
                    </form>
                </div>

                <div className='information__content--info'>
                    <div className="information__content--buttons">
                        <div className="information__content--regresar">
                            <button>regresar</button>
                        </div>
                        <div className="information__content--next">
                            <Link to="/checkout/payment">
                                <button>pagar</button>
                            </Link>
                        </div>
                    </div>

                    <div className="information__content--pedido">
                        <h3>Pedido</h3>
                        <div className="information__pedido--item">
                            <div className="information__pedido--element">
                                <h4 className='information__pedido--h4'>Item Name</h4>
                                <span className='information__pedido--price'>$10</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export { Information };