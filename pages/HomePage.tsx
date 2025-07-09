import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useArticles } from '../context/ArticleContext';
import type { Article } from '../types';
import ArticleCard from '../components/ArticleCard';
import SocialLinks from '../components/SocialLinks';
import { MessageCircleIcon, CalendarIcon, ChevronRightIcon } from '../components/icons';

const HeroArticle: React.FC<{ article: Article }> = ({ article }) => {
    const navigate = useNavigate();
    const handleHeroClick = () => {
        navigate(`/noticia/${article.id}`);
    };

    return (
        <div onClick={handleHeroClick} className="relative aspect-w-16 aspect-h-9 lg:aspect-h-7 xl:aspect-h-6 w-full rounded-xl overflow-hidden shadow-2xl cursor-pointer group mb-8">
            <img src={article.imageUrl} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white w-full md:w-3/4 lg:w-2/3">
                <span className="text-sm font-bold bg-white/20 text-white px-2 py-1 rounded">{article.category}</span>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mt-2 leading-tight drop-shadow-lg">{article.title}</h1>
                <p className="mt-2 text-gray-200 hidden sm:block drop-shadow-md">{article.excerpt}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-300 mt-4">
                    <div className="flex items-center space-x-1">
                        <MessageCircleIcon className="w-4 h-4" />
                        <span>{article.commentsCount}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{article.date} por {article.author.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PopularArticles: React.FC<{ articles: Article[] }> = ({ articles }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scroll = (scrollOffset: number) => {
        if(scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += scrollOffset;
        }
    };
    return (
        <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Populares del mes</h2>
                <button onClick={() => scroll(300)} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <ChevronRightIcon className="w-5 h-5"/>
                </button>
            </div>
            <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'none' }}>
                {articles.map(article => (
                    <div key={article.id} className="flex-shrink-0 w-64">
                         <ArticleCard article={article} layout="vertical" />
                    </div>
                ))}
            </div>
        </div>
    );
}

const HomePage: React.FC = () => {
    const { articles } = useArticles();
    const sortedByPopularity = [...articles].sort((a,b) => (b.views + b.shares) - (a.views + a.shares));
    const heroArticle = articles.length > 0 ? articles[0] : null;
    const popularArticles = sortedByPopularity.slice(0, 6);
    const latestArticles = [...articles].sort((a, b) => b.id - a.id).slice(0, 5);
    
    if (!heroArticle) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <h2 className="text-2xl font-bold">No hay noticias para mostrar.</h2>
                <p className="mt-2 text-gray-500">Por favor, añada artículos desde el panel de administración.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <HeroArticle article={heroArticle} />
            
            {popularArticles.length > 0 && <PopularArticles articles={popularArticles} />}

            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
                <div className="lg:col-span-2">
                    {latestArticles.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold mb-4">Últimas Noticias</h2>
                            <div className="space-y-8">
                                {latestArticles.map(article => (
                                    <ArticleCard key={article.id} article={article} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <aside className="lg:col-span-1 mt-8 lg:mt-0">
                    <div className="sticky top-24 space-y-8">
                         <SocialLinks />
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default HomePage;