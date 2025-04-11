import { useCartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ id, name, brand, image, feminine, price }) => {
    const { addToCart } = useCartContext();

    return (
        <>
            <article className='w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 max-w-[200px] min-w-[150px] relative card-produto group bg-stone-100 shadow-md shadow-slate-200 flex flex-col justify-between border border-gray-200 rounded-xl p-4 transition-all hover:scale-105'>

                <img
                    className='group-hover:scale-105 rounded-lg transition duration-300 mb-4'
                    src={image}
                    alt={`Imagem do produto ${id}`}
                />

                <div className='flex flex-col gap-1'>
                    <p className='text-sm text-slate-400'>{brand}</p>
                    <p className='text-sm '>{name}</p>
                </div>


                <div>
                    <p className='text-base font-medium text-green-700 pt-2 pb-2'>
                        R${price}
                    </p>
                    <button
                        onClick={() => addToCart(id)}
                        className='text-sm bg-slate-900 rounded-md text-slate-100 hover:bg-slate-800 transition duration-300 flex items-center justify-center gap-1 py-1 px-4 w-full cursor-pointer'
                    >
                        Adicionar
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </article>
        </>
    );
};

export default ProductCard;
