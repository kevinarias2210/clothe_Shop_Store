import { useContext } from 'react';
import { appContext } from '../../context/appContext';
import { Product } from '../Product/Product';
import './css/Products.css';

function Products () {
    const { state, addToCart } = useContext(appContext);
    const { productos } = state;

    const addCart = producto => () => {
        addToCart(producto);
    }

    /* const productos = cosas.filter((obj) => {
        const text = obj.title.toLoweCase();
        const searchText = obj.title.toLowerCase();
    
        return text.includes(searchValue(searchText))
    }) */

    return(
        <div className='productos'>
            <div className='productos__items'>

                {productos.map(producto => (
                    <Product key={producto.id} producto={producto} addCart={addCart} />
                ))}
            </div>
        </div>
    );
}

export { Products }