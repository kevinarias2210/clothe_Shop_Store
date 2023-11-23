import React from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../../context/appContext';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './css/Payment.css';

function Payment (){
    const { state, addNewOrder } = React.useContext(appContext);
    const { cart, comprador } = state;

    const navigate = useNavigate();

    const totalItem = () => {
        const reducer = (acumulador, valorActual) => acumulador + valorActual.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    const paypalOptions = {
        clientId: 'AYf8DXnW5-2NyO_drkZ-0y7eKfTX4LTpoTYZ02sSbwbVfiaKPFk9J9DkIA_8BBc33JcEzMQWiD2YPMjw',
        intent: 'capture',
        currency: 'USD',//Tipo de moneda por el que se va a cobrar
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    };

    /* const ButtonWrapper = () => {
        React.useEffect(() => {
            navigate('/checkout/success');
        }, []);
    } */

    const paymentSuccess = (data) => {
        console.log(data);
        navigate('/checkout/success');

        if(data.status === 'COMPLETED'){
            const newOrder = {
                comprador,
                productos: cart,
                payment: data,
            }
            
            addNewOrder(newOrder);
        }
    };

    return(
        <div className="payment">
            <div className="payment__content">
                <h3>Resumen del pedido</h3>
                <div className='payment__content--items'>
                    {cart.map((item) => (
                        <div key={item.title}>
                            <div className='payment__content--item' > 
                                <div className="payment__content--element">
                                    <h4 className='payment__content--h4'>{item.title}</h4>
                                    <span className='payment__content--span'>$ {item.price}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="payment__content--button">
                    <PayPalScriptProvider>
                        <PayPalButtons 
                            paypalOptions={paypalOptions}
                            buttonStyles={buttonStyles}
                            createOrder={(data, actions) => {//La data es obligatorio, o si no botará un error y no abrirá la opción de pago
                                return actions.order.create({
                                    purchase_units: [{
                                    amount: {
                                        currency_code: "USD",
                                        value: totalItem()
                                        }
                                    }],
                                });
                            }}
                            onApprove={data => paymentSuccess(data)}//Esto se muestra cuando el pago ha sido aprovado
                            onSuccess={data => paymentSuccess(data)}
                            onError={error => console.log(error)}
                            onCancel={data => console.log(data)}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
}

export { Payment };