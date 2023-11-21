import React from "react";
import cosas from "../cosas";

function useInitialState(){
    const [state, setState] = React.useState(cosas);

    const addToCart = paylad => {
        setState({
            ...state,
            cart: [...state.cart, paylad]
        });
    };

    const removeCart = paylad => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== paylad.id)
        });
    };

    const addToBuy = paylad => {
        setState({
            ...state,
            comprador: [...state.comprador, paylad]
        })
    };

    const addNewOrder = paylad => {
        setState({
            ...state,
            orders: [...state.orders, paylad]
        })
    };

    return{
        addToCart,
        removeCart,
        addToBuy,
        addNewOrder,
        state
    }
}

export { useInitialState }