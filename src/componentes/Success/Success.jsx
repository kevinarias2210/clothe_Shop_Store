import './css/Success.css';

function Success (){
    return(
        <div className="succes">
            <div className="succes__content">
                <h2 className="succes__content--h2">Oscar, Gracias por tu compra</h2>
                <span className="succes__content--span">Tu pedido llegará en 3 dias a tu dirección:</span>
                <div className="succes__content--map">
                    google maps
                </div>
            </div>
        </div>
    );
}

export { Success }