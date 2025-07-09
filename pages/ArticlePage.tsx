import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useArticles } from '../context/ArticleContext';
import { CalendarIcon, MessageCircleIcon } from '../components/icons';
import SocialLinks from '../components/SocialLinks';

const ArticlePage: React.FC = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const navigate = useNavigate();
    const { getArticle, trackArticleView, trackArticleShare } = useArticles();
    
    const numericArticleId = articleId ? parseInt(articleId, 10) : NaN;
    const article = getArticle(numericArticleId);

    useEffect(() => {
        if (article) {
            trackArticleView(article.id);
        }
        // Scroll to top on page load
        window.scrollTo(0, 0);
    }, [article?.id]); // Rerun effect if article ID changes

    if (isNaN(numericArticleId) || !article) {
        return (
            <div className="container mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold">Artículo no encontrado</h2>
                <p className="mt-2 text-gray-500">El artículo que buscas no existe o ha sido eliminado.</p>
                <Link to="/" className="mt-4 inline-block text-orange-500 hover:underline">Volver a la página de inicio</Link>
            </div>
        );
    }
    
    const handleShare = (platform: string) => {
        console.log(`Sharing on ${platform}`); // Placeholder for actual share logic
        trackArticleShare(article.id);
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                <article className="lg:col-span-2">
                    <header className="mb-8">
                        <div className="mb-4">
                            <Link to="/noticias" className="text-orange-600 dark:text-orange-400 hover:underline font-bold text-sm">{article.category}</Link>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">{article.title}</h1>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{article.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-6 border-t border-b border-gray-200 dark:border-gray-700 py-3">
                            <div className="flex items-center space-x-2">
                                <span>Por <strong>{article.author.name}</strong></span>
                            </div>
                            <span className="text-gray-300 dark:text-gray-600">|</span>
                            <div className="flex items-center space-x-1">
                                <CalendarIcon className="w-4 h-4" />
                                <span>{article.date}</span>
                            </div>
                            <span className="text-gray-300 dark:text-gray-600">|</span>
                             <div className="flex items-center space-x-1">
                                <MessageCircleIcon className="w-4 h-4"/>
                                <span>{article.commentsCount} comentarios</span>
                            </div>
                        </div>
                    </header>
                    
                    <div className="mb-8 rounded-lg overflow-hidden">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover" />
                    </div>

                    <div 
                        className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }}
                    >
                    </div>

                    <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
                        <h3 className="text-lg font-bold mb-4">Compartir este artículo:</h3>
                        <div className="flex gap-4">
                            <button onClick={() => handleShare('Facebook')} className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">Facebook</button>
                            <button onClick={() => handleShare('Twitter')} className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition">Twitter</button>
                            <button onClick={() => handleShare('Copy Link')} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">Copiar Enlace</button>
                        </div>
                    </div>

                </article>

                <aside className="lg:col-span-1 mt-8 lg:mt-0">
                    <div className="sticky top-24 space-y-8">
                        <SocialLinks />
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ArticlePage;