import { useCartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';

const CartProducts = ({ isHomePage = true }) => {
    const { cartItems } = useCartContext();
    const cartItemsArray = [];
    for (const itemId in cartItems) {
        cartItemsArray.push({ id: Number(itemId), amount: cartItems[itemId] });
    }

    return (
        <section
            className={`flex flex-col justify-start gap-2 ${
                isHomePage ? 'h-3/5' : ''
            } overflow-y-auto scrollbar-hide`}
        >
            {cartItemsArray.map((product) => {
                return <CartItem {...product} key={`key_${product.id}`} />;
            })}
        </section>
    );
};

export default CartProducts;
