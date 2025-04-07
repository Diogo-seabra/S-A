import logo from '../assets/logo/logo.svg';

const Header = () => {
    return (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4'>
            <a href='/'>
                <img className='h-16 px-2' src={logo} alt='Logo da S&A'/>
            </a>
        </header>
    );
};


export default Header;
