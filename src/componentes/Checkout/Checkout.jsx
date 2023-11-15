import { Link } from 'react-router-dom';
import './css/Checkout.css';

function Checkout (){
  return(
    <div className="checkOut">
      <div className="checkOut__content">
        <h3 className='checkOut__content--h3'>Lista de pedidos</h3>
        <div className="checkOut__content--items">
          <div className="checkOut__content--elements">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
        </div>
        <button className='checkOut__content--button' type="button">Delete Item</button>
      </div>
      
      <div className="checkOut__total">
        <h3 className='checkOut__total--h3'>Precio Total: <span>$10</span> </h3>
        <Link to="/checkout/information">
          <button className='checkOut__total--continue' type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
}

export { Checkout }