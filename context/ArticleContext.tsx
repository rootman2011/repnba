import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { MOCK_ARTICLES } from '../constants';
import type { Article } from '../types';

type ArticleCreationData = Omit<Article, 'id' | 'date' | 'commentsCount' | 'views' | 'shares'>;

interface ArticleContextType {
    articles: Article[];
    getArticle: (id: number) => Article | undefined;
    addArticle: (article: ArticleCreationData) => void;
    updateArticle: (article: Article) => void;
    deleteArticle: (id: number) => void;
    trackArticleView: (id: number) => void;
    trackArticleShare: (id: number) => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [articles, setArticles] = useState<Article[]>(() => {
        try {
            const localData = localStorage.getItem('articles');
            return localData ? JSON.parse(localData) : MOCK_ARTICLES;
        } catch (error) {
            console.error("Could not parse articles from localStorage", error);
            return MOCK_ARTICLES;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('articles', JSON.stringify(articles));
        } catch (error) {
             console.error("Could not save articles to localStorage", error);
        }
    }, [articles]);

    const getArticle = (id: number): Article | undefined => {
        return articles.find(a => a.id === id);
    };

    const addArticle = (articleData: ArticleCreationData): void => {
        const newArticle: Article = {
            ...articleData,
            id: Date.now(), // Using timestamp for a simple unique ID
            date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
            commentsCount: 0,
            views: 0,
            shares: 0,
        };
        setArticles(prevArticles => [newArticle, ...prevArticles]);
    };

    const updateArticle = (updatedArticle: Article): void => {
        setArticles(prevArticles => 
            prevArticles.map(a => (a.id === updatedArticle.id ? updatedArticle : a))
        );
    };

    const deleteArticle = (id: number): void => {
        setArticles(prevArticles => prevArticles.filter(a => a.id !== id));
    };

    const trackArticleView = (id: number): void => {
        setArticles(prevArticles =>
            prevArticles.map(a => 
                a.id === id ? { ...a, views: a.views + 1 } : a
            )
        );
    };
    
    const trackArticleShare = (id: number): void => {
        setArticles(prevArticles =>
            prevArticles.map(a => 
                a.id === id ? { ...a, shares: a.shares + 1 } : a
            )
        );
    };

    return (
        <ArticleContext.Provider value={{ articles, getArticle, addArticle, updateArticle, deleteArticle, trackArticleView, trackArticleShare }}>
            {children}
        </ArticleContext.Provider>
    );
};

export const useArticles = () => {
    const context = useContext(ArticleContext);
    if (context === undefined) {
        throw new Error('useArticles must be used within an ArticleProvider');
    }
    return context;
};