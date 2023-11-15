import React from "react";
import cosas from "../cosas";

function useInitialState(){
    const [state, setState] = React.useState(cosas);

    const addToCart = paylad => {
        setState({
            ...state,
            cart: [...state.cart, paylad]
        });
        console.log(paylad);
    };

    const removeCart = paylad => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id != paylad.id)
        });
    };

    return{
        addToCart,
        removeCart,
        state
    }
}

export { useInitialState }