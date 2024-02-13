import { useContext } from 'react';
import { appContext } from '../../context/appContext';
import './css/Success.css';

function Success (){
    const { state } = useContext(appContext);
    const { comprador } = state;

    return(
        <div className="succes">
            <div className="succes__content">
                {comprador.map((persona) => (
                    <div className='succes__content--info' key={persona.id}>
                        <p className="succes__content--title">
                            <span className="succes__content--name">{persona.name}</span> Gracias por tu compra
                        </p>
                        <p className="succes__content--p">Tu pedido llegará en 3 dias a tu dirección: 
                            <span className='succes__content--address'>{` ${persona.address}`}</span>
                        </p>
                    </div>
                ))}

                {/* <div className="succes__content--map">
                    google maps
                </div> */}
            </div>
        </div>
    );
}

export { Success }