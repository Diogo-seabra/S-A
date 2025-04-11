import { useEffect } from 'react';
import { useCartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import CartProducts from './CartProducts';
import TotalPriceCell from './TotalPriceCell';
import { Link } from 'react-router-dom';

const CartOverlay = () => {
    const { cartItems, isCartOpen, toggleIsCartOpen } = useCartContext();

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isCartOpen]);

    return (
        <div
            className={`z-50 h-svh w-screen fixed top-0 left-0  transition duration-600 ${
                isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
        >
            <section
                id='outside-of-cart'
                onClick={toggleIsCartOpen}
                className={`absolute top-0 left-0 w-full h-full bg-slate-950 transition-opacity duration-500 ${
                    isCartOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
                }`}
            ></section>
            <section
                id='inside-of-cart'
                className={`absolute top-0 right-0 h-svh bg-slate-950 w-full sm:w-3/4 md:w-2/4 lg:w-1/3 xl:w-1/4 min-w-[300px] border-l-4 border-slate-400 p-5 flex flex-col justify-between text-white transform transition-transform duration-500 ${
                    isCartOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {Object.keys(cartItems).length === 0 ? (
                    <>
                        <div className='flex justify-between border-b border-slate-300 px-4 py-2 mb-2'>
                            <p>Meu carrinho</p>
                        </div>

                        <div className='flex flex-col items-center justify-center h-full text-slate-400 gap-4'>
                            <p>Seu carrinho está vazio 😕</p>
                            <button onClick={toggleIsCartOpen}>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    className='text-4xl'
                                />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex justify-between border-b border-slate-300 px-4 py-2 mb-2'>
                            <p>Meu carrinho</p>
                            <button onClick={toggleIsCartOpen}>
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    className='text-xl text-slate-400'
                                />
                            </button>
                        </div>

                        <CartProducts />
                        <TotalPriceCell />
                        <Link
                            to='/checkout'
                            className='bg-slate-100 text-slate-950 rounded-sm p-1 hover:bg-slate-300 text-center'
                        >
                            Finalizar Compra
                        </Link>
                    </>
                )}
            </section>
        </div>
    );
};

export default CartOverlay;
