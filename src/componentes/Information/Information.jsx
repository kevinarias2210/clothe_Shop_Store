/* import React from "react"; */

function Information (){
    return(
        <div className="information">
            <div className="information__content">
                <div className="information__content--head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="information__content--form">
                    <form action="">
                        <input type="text" placeholder="Nombre completo" name="name"/>
                        <input type="text" placeholder="Correo" name="email"/>
                        <input type="text" placeholder="Dirección" name="address"/>
                        <input type="text" placeholder="Apto" name="apto"/>
                        <input type="text" placeholder="Ciudad" name="city"/>
                        <input type="text" placeholder="Pais" name="country"/>
                        <input type="text" placeholder="Estado" name="state"/>
                        <input type="text" placeholder="Codigo postal" name="cp"/>
                        <input type="text" placeholder="Teléfono" name="phone"/>
                    </form>
                </div>

                <div className="information__content--buttons">
                    <div className="information__content--regresar">
                        regresar
                    </div>
                    <div className="information__content--next">
                        pagar
                    </div>
                </div>
            </div>

            <div className="information__pedido">
                <h3>Pedido</h3>
                <div className="information__pedido--item">
                    <div className="information__pedido--element">
                        <h4>Item Name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Information };