import logo from '../assets/logo/logo.svg';
import UserButtons from './UserButtons';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();
    const completeHeader = (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between z-10'>
            <a href='/'>
                <img
                    className='px-2 w-26 h-auto'
                    src={logo}
                    alt='Logo da S&A'
                />
            </a>
            <UserButtons />
        </header>
    );

    const simpleHeader = (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between z-10'>
            <a href='/'>
                <img
                    className='px-2 w-20 h-auto'
                    src={logo}
                    alt='Logo da S&A'
                />
            </a>
        </header>
    );

    return <>{pathname === '/' ? completeHeader : simpleHeader}</>;
};

export default Header;
