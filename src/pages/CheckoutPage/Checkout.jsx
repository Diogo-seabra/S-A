import CartProducts from '../../components/Cart/CartProducts';
import TotalPriceCell from '../../components/Cart/TotalPriceCell';
import FormInput from '../../utils/FormInput';

const Checkout = () => {
    return (
        <main className='bg-stone-200 h-[calc(100dvh-6rem)]'>
            <p className='text-center text-2xl font-bold text-slate-950  pt-8'>
                Finalizar Compra
            </p>
            <form className='grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 h-3/4 mt-6 px-8'>
                <p className='text-center text-sm font-bold text-slate-950'>
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

                <p className='text-center text-sm font-bold text-slate-950 row-start-1'>
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
                <p className='text-center text-sm font-bold text-slate-950 row-start-1'>
                    Seus Produtos
                </p>
                <section className='row-span-4 p-2 bg-neutral-100 rounded-md overflow-auto scrollbar-hide'>
                    <CartProducts isHomePage={false}/>
                </section>
                <section className='row-span-1 flex flex-col gap-2'>
                    <TotalPriceCell />
                    <button className='bg-slate-950 text-slate-100 rounded-md p-1 hover:bg-slate-800 text-center'>
                        Finalizar Compra
                    </button>
                </section>
            </form>
        </main>
    );
};

export default Checkout;
