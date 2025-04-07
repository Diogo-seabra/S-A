import logo from '../assets/logo/logo.svg';
import UserButtons from './UserButtons';

const Header = () => {
    return (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between text-base z-10'>
            <a href='/'>
                <img
                    className='h-16 px-2 w-25 h-auto'
                    src={logo}
                    alt='Logo da S&A'
                />
            </a>
            <UserButtons />
        </header>
    );
};

export default Header;
