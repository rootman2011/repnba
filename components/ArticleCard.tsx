

import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Article } from '../types';
import { MessageCircleIcon, CalendarIcon } from './icons';

interface ArticleCardProps {
    article: Article;
    layout?: 'horizontal' | 'vertical';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, layout = 'horizontal' }) => {
    const navigate = useNavigate();

    const handleArticleClick = () => {
        navigate(`/noticia/${article.id}`);
    };

    if (layout === 'vertical') {
        return (
            <div onClick={handleArticleClick} className="cursor-pointer group">
                <div className="overflow-hidden rounded-lg">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="mt-2">
                    <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{article.category}</span>
                    <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{article.title}</h3>
                </div>
            </div>
        );
    }
    
    return (
        <div onClick={handleArticleClick} className="flex flex-col sm:flex-row gap-4 group cursor-pointer">
            <div className="flex-shrink-0 sm:w-1/3 lg:w-48 xl:w-56">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                    <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
            </div>
            <div className="flex-grow">
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{article.category}</span>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{article.title}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm hidden md:block">{article.excerpt}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mt-3">
                    <div className="flex items-center space-x-1">
                        <MessageCircleIcon className="w-3 h-3"/>
                        <span>{article.commentsCount}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <CalendarIcon className="w-3 h-3" />
                        <span>{article.date} por {article.author.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;