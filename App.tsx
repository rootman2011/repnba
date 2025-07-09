import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewsListPage from './pages/NewsListPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ArticleEditPage from './pages/ArticleEditPage';
import ArticlePage from './pages/ArticlePage';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') === 'dark' || 
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} isAuthenticated={isAuthenticated} />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/noticias" element={<NewsListPage />} />
                    <Route path="/noticia/:articleId" element={<ArticlePage />} />
                    <Route path="/contacto" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/admin/new" element={<ArticleEditPage />} />
                        <Route path="/admin/edit/:articleId" element={<ArticleEditPage />} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;