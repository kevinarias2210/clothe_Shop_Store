import React from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../../context/appContext';
import './css/Checkout.css';

function Checkout (){
  const {state, removeCart } = React.useContext(appContext);
  const { cart } = state;


  const totalItem = () => {
    const reducer = (acumulador, valorActual) => acumulador + valorActual.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return(
    
    <div className="checkOut">
      {cart.length > 0 ? <h3 className='checkOut__h3-list'>Lista de pedidos:</h3> : <h3 className='checkOut__h3--sinPedidos'>Sin pedidos...</h3>}
      <div className="checkOut__content">

        {cart.map((item) => (
          <div key={item.id}>
            <div className="checkOut__content--items" >
              <div className="checkOut__content--elements">
                <h4 className='checkOut__content--h4'>{item.title}</h4>
                <span className='checkOut__content--price'>{item.price}</span>
                <img className='checkOut__content--image' src={item.image} alt={item.title} />
              <button className='checkOut__content--button' type="button" 
                onClick={() => removeCart(item)}>Delete Item</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {cart.length > 0 && (
        <div className="checkOut__total">
          <h3 className='checkOut__total--h3'>Precio Total: <span className='checkOut__total--price'>{` $ ${totalItem()}`}</span> </h3>
          <Link to="/checkout/information">
            <button className='checkOut__total--continue' type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>

    
  );
}

export { Checkout }