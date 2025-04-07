const ProductFilters = () => {
    return (
        <section className='flex justify-center items-center py-8'>
            <input
                id='filtro-0'
                type='radio'
                name='filter-selection'
                className='hidden'
            />
            <label
                className='rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
                htmlFor='filtro-0'
            >
                Todos
            </label>
            <input
                id='filtro-1'
                type='radio'
                name='filter-selection'
                className='hidden'
            />
            <label
                className='bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
                htmlFor='filtro-1'
            >
                Masculino
            </label>
            <input
                id='filtro-2'
                type='radio'
                name='filter-selection'
                className='hidden'
            />
            <label
                className='rounded-r-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer'
                htmlFor='filtro-2'
            >
                Feminino
            </label>
        </section>
    );
};

export default ProductFilters;
