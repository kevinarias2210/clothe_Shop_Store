import './css/Product.css';

function Product({ producto, addCart }){
    return(
        <div className="productItem">
            <div className='productItem__container'>
                <img className='productItem__container--img' src={producto.image} alt={producto.title} />
                <div className="productItem__container--info">
                    <h2 className='productItem__container--h2'>
                        {producto.title}
                        <span className='productItem__container--span'>{` $${producto.price}`}</span>
                    </h2>
                    <p className='productItem__container--p'>{producto.description}</p>
                    <button className='productItem__container--button' type="button" onClick={addCart(producto)}>Comprar</button>
                </div>
            </div>
            

        </div>
    );
}

export { Product }