import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const UserButtons = () => {
    return (
        <div>
            <button className='px-2 relative '>
                <FontAwesomeIcon icon={faCartShopping} className='text-2xl' />
                <div
                    id='cart-amount'
                    className='absolute flex items-center justify-center w-6 h-6 text-sm leading-none font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2'
                >
                    3
                </div>
            </button>
            <a className='px-2' href='#'>
                <FontAwesomeIcon icon={faUser} className='text-2xl' />
            </a>
        </div>
    );
};

export default UserButtons;
