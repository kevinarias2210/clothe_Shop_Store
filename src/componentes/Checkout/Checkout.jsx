/* import React from "react"; */

function Checkout (){
  return(
    <div className="checkOut">
      <div className="checkOut__content">
        <h3>Lista de pedidos</h3>
        <div className="checkOut__content--items">
          <div className="checkOut__content--elements">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
        </div>
        <button type="button">Delete Item</button>
      </div>
      
      <div className="checkOut__total">
        <h3>Precio Total: $10</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  );
}

export { Checkout }