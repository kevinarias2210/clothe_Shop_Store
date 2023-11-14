import { Product } from '../Product/Product';
import './css/Products.css';

function Products ({ productos }) {
    return(
        <div className='productos'>
            <div className='productos__items'>
                {productos.map(producto => (
                    <Product key={producto.id} producto={producto}/>
                ))}
            </div>
        </div>
    );
}

export { Products }