import FormInput from '../../utils/FormInput';

const Checkout = () => {
    return (
        <main className='bg-stone-200 h-[calc(100dvh-6rem)]'>
            <p className='text-center text-2xl font-bold text-slate-950  pt-8'>
                Finalizar Compra
            </p>
            <form className='grid grid-rows-5 grid-cols-3 grid-flow-col gap-4 h-3/4 mt-6 px-8'>
                <FormInput
                    fieldType={'text'}
                    fieldName={'Nome'}
                    id='Nome'
                    placeholder={'John'}
                    className=''
                    required
                />
            </form>
        </main>
    );
};

export default Checkout;
