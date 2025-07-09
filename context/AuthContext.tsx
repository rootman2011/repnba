import React, { createContext, useState, useContext, ReactNode } from 'react';

// For demonstration purposes, using a hardcoded password.
// In a real application, this should be handled by a secure backend service.
const ADMIN_PASSWORD = 'password123';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Attempt to retrieve auth state from sessionStorage to persist session
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => 
        sessionStorage.getItem('isAuthenticated') === 'true'
    );

    const login = (password: string): boolean => {
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem('isAuthenticated', 'true');
            return true;
        }
        return false;
    };

    const logout = (): void => {
        setIsAuthenticated(false);
        sessionStorage.removeItem('isAuthenticated');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
