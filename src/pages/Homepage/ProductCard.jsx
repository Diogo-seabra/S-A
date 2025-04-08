import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const ProductCard = ({ id, name, brand, image, feminine, price }) => {
    const {addToCart} = useContext(CartContext)

    return (
        <>
            <article className='relative card-produto group w-48 bg-stone-100 shadow-md shadow-slate-200 flex flex-col justify-between border border-gray-200 rounded-xl p-4 transition-all hover:scale-105'>
                <img
                    className='group-hover:scale-105 rounded-lg transition duration-300 mb-4'
                    src={image}
                    alt={`Imagem do produto ${id}`}
                />

                <div className='flex flex-col gap-1 mb-8'>
                    <p className='text-sm text-slate-400'>{brand}</p>
                    <p className='text-sm '>{name}</p>
                    <p className='text-base font-medium text-green-700 absolute bottom-12 left-4'>
                        R${price}
                    </p>
                </div>

                <button onClick={() => addToCart(id)} className='bg-slate-900 rounded-md text-slate-100 hover:bg-slate-800 transition duration-300 flex items-center justify-center gap-2 py-1 px-4 w-full'>
                    Adicionar<FontAwesomeIcon icon={faCartPlus} />
                </button>
            </article>
        </>
    );
};

export default ProductCard;
