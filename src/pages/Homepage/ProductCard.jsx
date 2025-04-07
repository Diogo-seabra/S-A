const ProductCard = ({ id, name, brand, image, feminine, price }) => {
    return (
        <article className='card-produto group w-48 bg-stone-100 shadow-xl shadow-slate-200 flex-col justify-around border-2 border-gray-200 rounded-lg p-4'>
            <img className="group-hover:scale-110 rounded-lg transition duration-300" src={image} alt={`Imagem do produto ${id}`} />
            <p className="mx-4 text-sm text-slate-400">{brand}</p>
            <p className="mx-4 text-sm ">{name}</p>
            <p className="mx-4 text-sm text-green-700">{price}</p>
        </article>
    );
};

export default ProductCard;
