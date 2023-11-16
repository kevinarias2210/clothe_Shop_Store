import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { appContext } from '../../context/appContext';
import './css/Information.css';

function Information (){
    const { state, addToBuy} = React.useContext(appContext);
    const form = React.useRef(null);
    const navigate = useNavigate();
    const { cart } = state;

    const enviarForm = () => {
        const formData = new FormData(form.current);
        const comprador = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }

        addToBuy(comprador);
        navigate('/checkout/payment');
    }

    return(
        <div className="information">
            <div className="information__content">
                <div className="information__content--head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="information__content--form">
                    <form ref={form}>
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
                            <Link to={"/checkout"}>
                                <button>regresar</button>
                            </Link>
                        </div>
                        <div className="information__content--next">
                            <button type='button' onClick={enviarForm}>Pagar</button>
                            
                        </div>
                    </div>

                    <div className="information__content--pedido">
                        <h3>Pedido</h3>
                        {cart.map((item) => (
                            <>
                                <div className="information__pedido--item" key={item.title}>
                                    <div className="information__pedido--element">
                                        <h4 className='information__pedido--h4'>{item.title}</h4>
                                        <span className='information__pedido--price'>{item.price}</span>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
}

export { Information };