import React from 'react';

interface IconProps {
    className?: string;
}

export const BasketballIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07" />
        <path d="M4.93 4.93A10 10 0 0 1 19.07 19.07" />
        <path d="M2 12h20" />
        <path d="M12 2c-2.76 3.2-2.76 6.8 0 10s2.76 6.8 0 10" />
        <path d="M12 2c2.76 3.2 2.76 6.8 0 10s-2.76 6.8 0 10" />
    </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

export const XIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

export const MessageCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M16.75 13.96c.27.13.42.26.48.4a.9.9 0 01.06.45c-.06.13-.12.27-.24.42a1.36 1.36 0 01-.42.36c-.12.06-.24.06-.48.06h-.12c-.24 0-.48 0-.84-.12-.48-.13-1.02-.36-1.56-.72-.54-.36-1.02-.84-1.44-1.44-.36-.48-.6-1.02-.72-1.56s-.18-.9-.18-1.14v-.06c0-.24.06-.48.18-.72.12-.24.3-.42.48-.54.24-.12.42-.18.6-.18.12 0 .24 0 .36.06.12.06.24.12.3.18.12.06.18.18.24.3.06.12.06.24.06.36s0 .24-.06.36a.9.9 0 01-.18.36c-.06.12-.12.18-.18.18s-.12 0-.18-.06c-.06-.06-.12-.12-.18-.18s-.12-.18-.12-.24c0-.06 0-.12.06-.18.06-.06.12-.12.18-.18.12-.06.3-.12.48-.12.18 0 .36.06.48.18.18.12.3.3.42.54.12.24.18.48.18.78.06.3-.06.6-.18.84zM12 2a10 10 0 100 20 10 10 0 000-20z"></path>
    </svg>
);

export const TelegramIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M15 12l-4-2-6 3 11-5-12 11 3-7z"></path>
    </svg>
);

export const DiscordIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M19.54 5.32a9.66 9.66 0 00-4.8-1.39C14.08 4.7 13.3 5.4 13.3 5.4s-.78-.54-2.44-.54c-1.66 0-2.44.54-2.44.54s-.78-.7-1.54-.86a9.66 9.66 0 00-4.8 1.39A10.5 10.5 0 002 15.68c0 3.2 2.65 5.82 5.9 5.82.02 0 .04 0 .06 0a8.5 8.5 0 002.1-.36 6.3 6.3 0 01-.64-2.02c-1.92.3-3.6.1-4.48-.14a6.45 6.45 0 01-1.1-3.56c.86.36 1.8.62 2.8.78.6.1 1.2.14 1.84.14.78 0 1.54-.08 2.26-.22.8-.16 1.56-.38 2.28-.66v-.02s.5.4 1.02.72c1.4.78 3.12 1.06 4.96 1.06a8.5 8.5 0 002.1.36c.02 0 .04 0 .06 0 3.25 0 5.9-2.62 5.9-5.82 0-3.66-2.5-6.8-5.46-8.36zm-4.4 7.42c-.82 0-1.5-.7-1.5-1.54s.68-1.54 1.5-1.54c.82 0 1.5.7 1.5 1.54s-.68 1.54-1.5 1.54zm-5.2 0c-.82 0-1.5-.7-1.5-1.54s.68-1.54 1.5-1.54c.82 0 1.5.7 1.5 1.54s-.68 1.54-1.5 1.54z"></path>
    </svg>
);

export const EditIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

export const LogoutIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);