import { catalogIndexedById } from '../../utils/catalog';

const SimpleCartItem = ({ id, amount }) => {
    const { price, name, image } = catalogIndexedById[id];

    return (
        <article className='flex bg-stone-100 p-3 border rounded-md relative'>
            <img
                src={image}
                alt={`imagem do produto ${id}, ${name}.`}
                className='h-24'
            />

            <div className='flex flex-col justify-around mx-2'>
                <p className='text-slate-950 text-sm'>{name}</p>
                <p className='text-slate-400 text-xs'>Tamanho M</p>
                <p className='text-green-700 text-lg'>R${price}</p>
                <div className='flex items-center gap-1 text-slate-950 absolute right-2 bottom-2 mb-2'>
                    <p className='text-center w-fit text-sm font-bold whitespace-nowrap'>
                        Quantidade: {amount}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default SimpleCartItem;
