import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useArticles } from '../context/ArticleContext';
import ArticleForm from '../components/ArticleForm';
import type { Article } from '../types';

const ArticleEditPage: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const navigate = useNavigate();
    const { getArticle, addArticle, updateArticle } = useArticles();

    const isEditing = Boolean(articleId);
    const numericArticleId = articleId ? parseInt(articleId, 10) : NaN;
    const articleToEdit = isEditing ? getArticle(numericArticleId) : null;

    if (isEditing && !articleToEdit) {
        return (
            <div className="container mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold">Artículo no encontrado</h2>
                <p className="mt-2 text-gray-500">El artículo que intentas editar no existe.</p>
                <Link to="/admin" className="mt-4 inline-block text-blue-500 hover:underline">Volver al panel de administración</Link>
            </div>
        );
    }
    
    const handleSubmit = (data: Omit<Article, 'id' | 'date' | 'commentsCount' | 'views' | 'shares'>) => {
        if (isEditing && articleToEdit) {
            updateArticle({ ...articleToEdit, ...data });
        } else {
            addArticle(data);
        }
        navigate('/admin');
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {isEditing ? 'Editar Artículo' : 'Crear Nuevo Artículo'}
                </h1>
                <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <ArticleForm 
                        onSubmit={handleSubmit} 
                        initialData={articleToEdit}
                        isEditing={isEditing}
                    />
                </div>
            </div>
        </div>
    );
};

export default ArticleEditPage;