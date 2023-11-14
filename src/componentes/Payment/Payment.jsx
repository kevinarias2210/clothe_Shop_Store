import './css/Payment.css';

function Payment (){
    return(
        <div className="payment">
            <div className="payment__content">
                <h3>Resumen del pedido</h3>
                <div className="payment__content--button">
                    <button>boton de pago con paypal</button>
                </div>
            </div>
        </div>
    );
}

export { Payment };