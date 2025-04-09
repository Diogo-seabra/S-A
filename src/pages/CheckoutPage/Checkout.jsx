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
                className='bg-slate-950 text-white text-xl grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 h-[80%] mt-6 px-8 pb-12'
            >
                <p className='text-center font-bold'>Seus dados</p>
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

                <p className='text-center font-bold row-start-1'>
                    Pagamento e Entrega
                </p>
                <FormInput
                    fieldType='text'
                    fieldName='Número do Cartão'
                    id='credit-card'
                    placeholder='XXXX XXXX XXXX XXXX'
                    required
                />
                <div className='flex justify-center gap-3'>
                    <FormInput
                        fieldType='text'
                        fieldName='CVV'
                        id='cvv'
                        placeholder='123'
                        className='w-1/2'
                        required
                    />
                    <FormInput
                        fieldType='text'
                        fieldName='Data de Vencimento'
                        id='expiration-date'
                        placeholder='01/70'
                        className='w-1/2'
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
                <div className='flex justify-center gap-3'>
                    <FormInput
                        fieldType='text'
                        fieldName='Número'
                        id='adress-number'
                        placeholder='12'
                        className='w-1/2'
                        required
                    />
                    <FormInput
                        fieldType='text'
                        fieldName='Complemento (opcional)'
                        id='apt-number'
                        placeholder='103'
                        className='w-1/2'
                    />
                </div>
                <p className='text-center font-bold row-start-1'>
                    Seus Produtos
                </p>
                <section className='row-span-4 p-2 bg-neutral-100 rounded-md overflow-auto scrollbar-hide'>
                    <CartProducts isHomePage={false} />
                </section>
                <section className='row-span-1 flex flex-col gap-2'>
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
