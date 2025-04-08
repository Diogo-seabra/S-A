import { useCartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { catalogIndexedById } from '../../utils/catalog';

const CartItem = ({ id, amount }) => {
    const { addToCart, decreaseUnit, removeFromCart } = useCartContext();
    const { brand, price, name, image } = catalogIndexedById[id];

    return (
        <article className='flex bg-stone-100 p-3 border rounded-md relative'>
            <img
                src={image}
                alt={`imagem do produto ${id}, ${name}.`}
                className='h-24'
            />
            <button className='text-right text-xl absolute top-0 right-2 text-slate-950'>
                <FontAwesomeIcon
                    onClick={() => removeFromCart(id)}
                    icon={faTrashCan}
                    className='cursor-pointer'
                />
            </button>
            <div className='flex flex-col justify-around mx-2'>
                <p className='text-slate-950 text-sm'>{name}</p>
                <p className='text-slate-400 text-xs'>Tamanho M</p>
                <p className='text-green-700 text-lg'>R${price}</p>
                <div className='flex items-center gap-1 text-slate-950 absolute right-2 bottom-2 mb-2'>
                    <button className='border border-slate-400 hover:border-slate-900 text-xl px-2 py-0.5 rounded-md cursor-pointer'>
                        <FontAwesomeIcon
                            onClick={() => decreaseUnit(id)}
                            icon={faMinus}
                            className='p-1'
                        />
                    </button>

                    <p className='text-center w-8 text-sm font-medium'>
                        {amount}
                    </p>

                    <button className='border border-slate-400 hover:border-slate-900 text-xl px-2 py-0.5 rounded-md cursor-pointer'>
                        <FontAwesomeIcon
                            onClick={() => addToCart(id)}
                            icon={faPlus}
                            className='p-1'
                        />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CartItem;
