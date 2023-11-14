/* import React from "react"; */

function Success (){
    return(
        <div className="succes">
            <div className="succes__content">
                <h2>Oscar, Gracias por tu compra</h2>
                <span>Tu pedido llegará en 3 dias a tu dirección:</span>
                <div className="succes__content--map">
                    google maps
                </div>
            </div>
        </div>
    );
}

export { Success }