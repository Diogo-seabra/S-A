import { useState, createContext, useContext } from 'react';

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const getAmountOfItemsInCart = (cartItemsObj) => {
    let amount = 0;
    for (const ProductId in cartItemsObj) {
        amount += cartItemsObj[ProductId];
    }
    return amount;
};

const CartContextProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (productId) => {
        const updatedCart = {
            ...cartItems,
            [productId]: (cartItems[productId] ?? 0) + 1,
        };
        setCartItems(updatedCart);
    };

    const decreaseUnit = (productId) => {
        if (cartItems[productId] > 1) {
            const updatedCart = {
                ...cartItems,
                [productId]: cartItems[productId] - 1,
            };
            setCartItems(updatedCart);
        } else {
            removeFromCart(productId);
        }
    };

    const removeFromCart = (productId) => {
        const cartItemsCopy = { ...cartItems };
        delete cartItemsCopy[productId];
        setCartItems(cartItemsCopy);
    };

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartContext.Provider
            value={{
                isCartOpen,
                cartItems,
                toggleIsCartOpen,
                removeFromCart,
                addToCart,
                decreaseUnit,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
