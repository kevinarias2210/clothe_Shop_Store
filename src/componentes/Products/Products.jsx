import React from 'react';
import { appContext } from '../../context/appContext';
import { Product } from '../Product/Product';
import './css/Products.css';

function Products () {
    const { state, addToCart } = React.useContext(appContext);
    const { productos } = state;

    const addCart = producto => () => {
        addToCart(producto)
    }

    return(
        <div className='productos'>
            <div className='productos__items'>
                {productos.map(producto => (
                    <Product key={producto.id} producto={producto} addCart={addCart}/>
                ))}
            </div>
        </div>
    );
}

export { Products }