import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Article } from '../types';

type ArticleFormData = Omit<Article, 'id' | 'date' | 'commentsCount' | 'views' | 'shares'>;

interface ArticleFormProps {
    onSubmit: (data: ArticleFormData) => void;
    initialData?: Article | null;
    isEditing: boolean;
}

const ArticleForm: React.FC<ArticleFormProps> = ({ onSubmit, initialData, isEditing }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ArticleFormData>({
        title: '',
        excerpt: '',
        content: '',
        category: 'Noticias',
        imageUrl: '',
        author: { name: '' },
    });

    useEffect(() => {
        if (isEditing && initialData) {
            setFormData({
                title: initialData.title,
                excerpt: initialData.excerpt,
                content: initialData.content,
                category: initialData.category,
                imageUrl: initialData.imageUrl,
                author: { name: initialData.author.name },
            });
        }
    }, [initialData, isEditing]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'authorName') {
            setFormData(prev => ({ ...prev, author: { name: value } }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const inputClasses = "mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Título</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required className={inputClasses} />
            </div>
            <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Extracto</label>
                <textarea name="excerpt" id="excerpt" rows={3} value={formData.excerpt} onChange={handleChange} required className={inputClasses}></textarea>
            </div>
            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contenido Completo</label>
                <textarea name="content" id="content" rows={10} value={formData.content} onChange={handleChange} required className={inputClasses}></textarea>
            </div>
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Categoría</label>
                <select name="category" id="category" value={formData.category} onChange={handleChange} required className={inputClasses}>
                    <option>Noticias</option>
                    <option>Rumores</option>
                    <option>Análisis</option>
                    <option>Playoffs</option>
                    <option>Draft</option>
                </select>
            </div>
            <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL de la Imagen</label>
                <input type="url" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} required className={inputClasses} placeholder="https://picsum.photos/seed/example/1200/500"/>
            </div>
             <div>
                <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre del Autor</label>
                <input type="text" name="authorName" id="authorName" value={formData.author.name} onChange={handleChange} required className={inputClasses} />
            </div>
            <div className="flex justify-end gap-4">
                 <button type="button" onClick={() => navigate('/admin')} className="inline-flex justify-center py-2 px-6 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none">
                    Cancelar
                </button>
                <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none">
                    {isEditing ? 'Actualizar Artículo' : 'Crear Artículo'}
                </button>
            </div>
        </form>
    );
};

export default ArticleForm;