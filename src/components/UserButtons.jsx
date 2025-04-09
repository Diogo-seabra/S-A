import {
    useCartContext,
    getAmountOfItemsInCart,
} from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserButtons = () => {
    const { toggleIsCartOpen, cartItems } = useCartContext();

    const amountOfItems = getAmountOfItemsInCart(cartItems);

    return (
        <div className='absolute top-11 right-2'>
            <button onClick={toggleIsCartOpen} className='px-3 relative'>
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className='text-2xl cursor-pointer'
                />
                {!!amountOfItems && (
                    <div
                        id='cart-amount'
                        className='absolute flex items-center justify-center w-6 h-6 text-sm leading-none font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-1'
                    >
                        {amountOfItems}
                    </div>
                )}
            </button>
            <FontAwesomeIcon icon={faUser} className='text-2xl px-3' />
        </div>
    );
};

export default UserButtons;
