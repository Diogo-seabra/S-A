import { catalog } from '../../utils/catalog';
import ProductCard from './ProductCard';

const ProductsContainer = ({ searchParams }) => {
    return (
        <section className='flex flex-wrap justify-center gap-8 sm:gap-6 px-1 sm:px-4 md:px-10 lg:px-16'>
            {(searchParams.get('filterby') !== null
                ? catalog.filter(
                      (p) =>
                          p.feminine ===
                          (searchParams.get('filterby') === 'fem')
                  )
                : catalog
            ).map((product) => (
                <ProductCard key={`product_${product.id}_key`} {...product} />
            ))}
        </section>
    );
};

export default ProductsContainer;
