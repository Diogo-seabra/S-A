import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import CartProducts from './CartProducts';

const CartOverlay = () => {
    const { isCartOpen, toggleIsCartOpen } = useContext(CartContext);

    return (
        <>
            <div
                className={`z-50 h-screen w-screen fixed top-0 left-0  transition duration-600 ${
                    isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
                }`}
            >
                <section
                    id='outside-of-cart'
                    onClick={toggleIsCartOpen}
                    className={`absolute top-0 left-0 w-full h-full bg-slate-950 transition-opacity duration-500 ${
                        isCartOpen
                            ? 'opacity-50'
                            : 'opacity-0 pointer-events-none'
                    }`}
                ></section>
                <section
                    id='inside-of-cart'
                    className={`absolute top-0 right-0 h-full bg-slate-950 min-w-96 w-1/4 border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white transform transition-transform duration-500 ${
                        isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className='flex justify-between border-b border-slate-50 px-4 py-2'>
                        <p>Meu carrinho</p>
                        <button onClick={toggleIsCartOpen}>
                            <FontAwesomeIcon icon={faCircleXmark} className='text-xl'/>
                        </button>
                    </div>
                    <CartProducts />
                </section>
            </div>
        </>
    );
};

export default CartOverlay;
