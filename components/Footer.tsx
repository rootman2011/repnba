import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 dark:text-gray-400">
                <p>&copy; {new Date().getFullYear()} ReporteNBA. Todos los derechos reservados.</p>
                <p className="text-sm mt-1">
                    Tu parada obligatoria para noticias de la NBA.
                    <span className="mx-2">|</span>
                    <Link to="/login" className="hover:underline">Admin Login</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;