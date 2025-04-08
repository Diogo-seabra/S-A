import { createContext } from 'react';

export const CartContext = createContext(null);

export const getAmountOfItemsInCart = (cartItemsObj) => {
    let amount = 0;
    for (const ProductId in cartItemsObj) {
        amount += cartItemsObj[ProductId];
    }
    return amount;
};
