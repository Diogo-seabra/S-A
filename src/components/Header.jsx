import logo from '../assets/logo/logo.svg';
import UserButtons from './UserButtons';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();
    const completeHeader = (
        <header className='flex text-base sm:text-lg md:text-xl sticky top-0 shadow-lg shadow-slate-400 bg-slate-950 text-slate-200 px-4 sm:px-6 md:px-8 py-2 items-center justify-between z-10'>
            <Link to='/'>
                <img
                    className='px-2 w-20 sm:w-24 md:w-28 h-auto'
                    src={logo}
                    alt='Logo da S&A'
                />
            </Link>
            <UserButtons />
        </header>
    );

    const simpleHeader = (
        <header className='flex text-base sm:text-lg md:text-xl sticky top-0 shadow-lg shadow-slate-400 bg-slate-950 text-slate-200 px-4 sm:px-6 md:px-8 py-2 items-center justify-between z-10'>
            <Link to='/'>
                <img
                    className='px-2 w-20 sm:w-24 md:w-28 h-auto'
                    src={logo}
                    alt='Logo da S&A'
                />
            </Link>
        </header>
    );

    return <>{pathname === '/' ? completeHeader : simpleHeader}</>;
};

export default Header;
