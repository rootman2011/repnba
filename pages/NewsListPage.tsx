import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import { useArticles } from '../context/ArticleContext';

const NewsListPage: React.FC = () => {
    const { articles } = useArticles();
    const [filter, setFilter] = useState('Todo');

    const categories = ['Todo', ...Array.from(new Set(articles.map(a => a.category)))];

    const filteredArticles = articles.filter(article => 
        filter === 'Todo' || article.category === filter
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black text-gray-900 dark:text-white">Todas las Noticias de la NBA</h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Explora todos los artículos, análisis y rumores del mundo del baloncesto.</p>
            </div>

            <div className="mb-8 flex flex-wrap gap-2 justify-center">
                 {categories.map(category => (
                     <button 
                        key={category} 
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 text-sm font-medium rounded-full focus:outline-none transition-colors duration-200 ${
                            filter === category 
                            ? 'text-white bg-orange-600 hover:bg-orange-700'
                            : 'text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                     >
                        {category}
                     </button>
                 ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map(article => (
                    <div key={article.id} className="w-full">
                        <ArticleCard article={article} layout="vertical" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsListPage;