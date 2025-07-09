import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchIcon, MoonIcon, SunIcon, MenuIcon, XIcon, BasketballIcon } from './icons';

interface HeaderProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme, isAuthenticated }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClasses = "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200";
    const activeNavLinkClasses = "text-orange-600 dark:text-orange-400 font-semibold";

    const navItems = (
        <>
            <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Inicio</NavLink>
            <NavLink to="/noticias" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Noticias</NavLink>
            <NavLink to="/contacto" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Contacto</NavLink>
            {isAuthenticated && (
                 <NavLink to="/admin" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Admin</NavLink>
            )}
        </>
    );

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                            <span className="sr-only">Open menu</span>
                            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center">
                         <NavLink to="/" className="flex items-center gap-2 text-xl font-black tracking-tighter text-gray-900 dark:text-white">
                            <BasketballIcon className="h-7 w-7 text-orange-500" />
                            <span className="uppercase">ReporteNBA</span>
                         </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems}
                    </nav>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full text-sm">
                            <SearchIcon className="h-4 w-4" />
                            <span className="hidden sm:inline">Buscar</span>
                        </button>
                        <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                            <span className="sr-only">Toggle theme</span>
                            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        {navItems}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;