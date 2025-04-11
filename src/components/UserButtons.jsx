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
        <div className='flex items-center gap-3 sm:gap-4'>
            <button onClick={toggleIsCartOpen} className='relative'>
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className='text-xl sm:text-2xl cursor-pointer'
                />
                {!!amountOfItems && (
                    <div
                        id='cart-amount'
                        className='absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-xs sm:text-sm font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2'
                    >
                        {amountOfItems}
                    </div>
                )}
            </button>
            <FontAwesomeIcon icon={faUser} className='text-xl sm:text-2xl' />
        </div>
    );
};

export default UserButtons;
