import Header from './components/Header';
import Home from './pages/Homepage/Home';
import Checkout from './pages/CheckoutPage/Checkout';
import { Routes, Route } from 'react-router-dom';
import CartContextProvider from './contexts/CartContext';

function App() {
    return (
        <CartContextProvider>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </CartContextProvider>
    );
}

export default App;
