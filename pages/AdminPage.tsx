import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useArticles } from '../context/ArticleContext';
import { useAuth } from '../context/AuthContext';
import { EditIcon, TrashIcon, PlusIcon, LogoutIcon } from '../components/icons';

const AdminPage: React.FC = () => {
    const { articles, deleteArticle } = useArticles();
    const { logout } = useAuth();
    const navigate = useNavigate();

    const sortedArticles = [...articles].sort((a, b) => b.id - a.id);

    const handleDelete = (id: number, title: string) => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar el artículo "${title}"?`)) {
            deleteArticle(id);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white">Panel de Administración</h1>
                <div className="flex items-center space-x-2">
                    <Link to="/admin/new" className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none">
                        <PlusIcon className="h-5 w-5" />
                        Crear Artículo
                    </Link>
                    <button onClick={handleLogout} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-full shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none">
                        <LogoutIcon className="h-5 w-5" />
                        Cerrar Sesión
                    </button>
                </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700/50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Título</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Categoría</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Vistas</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Shares</th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Acciones</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {sortedArticles.map((article) => (
                                <tr key={article.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900 dark:text-white">{article.title}</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{article.author.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300">
                                            {article.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{article.views.toLocaleString('es-ES')}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{article.shares.toLocaleString('es-ES')}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2 sm:space-x-4">
                                        <Link to={`/admin/edit/${article.id}`} className="text-amber-600 hover:text-amber-900 dark:text-amber-400 dark:hover:text-amber-200 inline-flex items-center gap-1">
                                            <EditIcon className="h-4 w-4" /> <span className="hidden sm:inline">Editar</span>
                                        </Link>
                                        <button onClick={() => handleDelete(article.id, article.title)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200 inline-flex items-center gap-1">
                                            <TrashIcon className="h-4 w-4" /> <span className="hidden sm:inline">Eliminar</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
             {articles.length === 0 && (
                <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">No hay artículos</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">¡Comienza creando tu primer artículo!</p>
                </div>
            )}
        </div>
    );
};

export default AdminPage;