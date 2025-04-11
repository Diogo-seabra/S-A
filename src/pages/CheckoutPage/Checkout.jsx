import { useRef, useState, useEffect } from 'react';
import CartProducts from '../../components/Cart/CartProducts';
import TotalPriceCell from '../../components/Cart/TotalPriceCell';
import FormInput from '../../utils/FormInput';
import { useCartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const formRef = useRef(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const { toggleIsCartOpen, removeFromCart } = useCartContext();

    toggleIsCartOpen();

    useEffect(() => {
        const handleInput = () => {
            if (formRef.current) {
                setIsFormValid(formRef.current.checkValidity());
            }
        };

        const formEl = formRef.current;
        if (formEl) {
            formEl.addEventListener('input', handleInput);
            return () => formEl.removeEventListener('input', handleInput);
        }
    }, []);

    return (
        <main className='bg-stone-200 h-[calc(100dvh-6rem)]'>
            <p className='text-center text-2xl font-bold text-slate-950  pt-8'>
                Finalizar Compra
            </p>
            <form
                ref={formRef}
                className='bg-slate-950 text-white text-xl flex flex-col gap-6 md:grid md:grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] md:grid-cols-3 md:grid-flow-col md:gap-4 h-full min-h-[80vh] mt-6 px-4 md:px-8 pb-12 overflow-auto'
            >
                <div className='col-span-full grid grid-cols-1 md:grid-cols-1 gap-4'>
                    <p className='text-center font-bold col-span-full'>
                        Seus dados
                    </p>
                    <FormInput
                        fieldType='text'
                        fieldName='Nome'
                        id='Nome'
                        placeholder='Diogo'
                        required
                    />
                    <FormInput
                        fieldType='text'
                        fieldName='Sobrenome'
                        id='surname'
                        placeholder='Seabra'
                        required
                    />
                    <FormInput
                        fieldType='email'
                        fieldName='E-mail'
                        id='email'
                        placeholder='diogoseabra@email.com'
                        required
                    />
                    <FormInput
                        fieldType='text'
                        fieldName='Telefone'
                        id='phone'
                        placeholder='(XX) 00000-0000'
                        required
                    />
                </div>

                <div className='border-t border-slate-700 col-span-full'></div>

                {/* PAGAMENTO E ENTREGA */}

                <div className='col-span-full grid grid-cols-1 md:grid-cols-1 gap-4'>
                    <p className='text-center font-bold col-span-full'>
                        Pagamento e Entrega
                    </p>
                    <FormInput
                        fieldType='text'
                        fieldName='Número do Cartão'
                        id='credit-card'
                        placeholder='XXXX XXXX XXXX XXXX'
                        required
                    />
                    <div className='flex flex-col md:flex-row justify-center gap-3 col-span-full'>
                        <FormInput
                            fieldType='text'
                            fieldName='CVV'
                            id='cvv'
                            placeholder='123'
                            className='w-full md:w-1/2'
                            required
                        />
                        <FormInput
                            fieldType='text'
                            fieldName='Data de Vencimento'
                            id='expiration-date'
                            placeholder='01/70'
                            className='w-full md:w-1/2'
                            required
                        />
                    </div>

                    <FormInput
                        fieldType='text'
                        fieldName='CEP'
                        id='postal-code'
                        placeholder='00000-000'
                        required
                    />
                    <FormInput
                        fieldType='text'
                        fieldName='Endereço'
                        id='adress'
                        placeholder='Avenida X'
                        required
                    />
                    <div className='flex flex-col md:flex-row justify-center gap-3 col-span-full'>
                        <FormInput
                            fieldType='text'
                            fieldName='Número'
                            id='adress-number'
                            placeholder='12'
                            className='w-full md:w-1/2'
                            required
                        />
                        <FormInput
                            fieldType='text'
                            fieldName='Complemento (opcional)'
                            id='apt-number'
                            placeholder='Ao lado da pizzaria X'
                            className='w-full md:w-1/2'
                        />
                    </div>
                </div>

                <div className='border-t border-slate-700 col-span-full'></div>

                {/* SEUS PRODUTOS */}
                <p className='text-center font-bold col-span-full'>
                    Seus Produtos
                </p>
                <section className='p-2 bg-neutral-100 rounded-md overflow-auto scrollbar-hide col-span-full min-h-[200px]'>
                    <CartProducts isHomePage={false} />
                </section>

                <section className='flex flex-col gap-2 col-span-full'>
                    <TotalPriceCell />
                    <Link
                        to='/'
                        onClick={() => removeFromCart()}
                        className={`rounded-md p-1 text-center transition ${
                            isFormValid
                                ? 'bg-slate-100 text-slate-950 hover:bg-slate-900 hover:text-slate-100'
                                : 'bg-slate-300 text-slate-500 pointer-events-none opacity-50'
                        }`}
                    >
                        Finalizar Compra
                    </Link>
                </section>
            </form>
        </main>
    );
};

export default Checkout;
