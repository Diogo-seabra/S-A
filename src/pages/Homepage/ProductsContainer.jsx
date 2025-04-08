import { catalog } from '../../utils/catalog';
import ProductCard from './ProductCard';

const ProductsContainer = ({ femaleProducts }) => {
    return (
        <section className='container flex flex-wrap mx-auto p-10 justify-center gap-10'>
            {(femaleProducts !== null
                ? catalog.filter((p) => p.feminine === femaleProducts)
                : catalog
            ).map((product) => (
                <ProductCard key={`product_${product.id}_key`} {...product} />
            ))}
        </section>
    );
};

export default ProductsContainer;
