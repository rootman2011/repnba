
import React from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import { WhatsAppIcon, TelegramIcon, DiscordIcon } from './icons';

const SocialLinks: React.FC = () => {
    const { trackEvent } = useAnalytics();

    const handleSocialClick = (platform: string) => {
        trackEvent('social_link_click', { platform });
    };

    return (
        <div className="space-y-4">
            <a href="#" onClick={() => handleSocialClick('WhatsApp')} className="flex items-center p-4 rounded-lg bg-orange-100 dark:bg-orange-900/50 hover:bg-orange-200 dark:hover:bg-orange-900/80 transition-colors duration-200">
                <WhatsAppIcon className="w-10 h-10 text-orange-500" />
                <div className="ml-4">
                    <p className="font-semibold text-orange-800 dark:text-orange-200">Únete al canal</p>
                    <p className="text-xl font-bold text-orange-900 dark:text-orange-100">WhatsApp</p>
                </div>
            </a>
            <a href="#" onClick={() => handleSocialClick('Telegram')} className="flex items-center p-4 rounded-lg bg-amber-100 dark:bg-amber-900/50 hover:bg-amber-200 dark:hover:bg-amber-900/80 transition-colors duration-200">
                <TelegramIcon className="w-10 h-10 text-amber-500" />
                <div className="ml-4">
                    <p className="font-semibold text-amber-800 dark:text-amber-200">Únete al canal</p>
                    <p className="text-xl font-bold text-amber-900 dark:text-amber-100">Telegram</p>
                </div>
            </a>
            <a href="#" onClick={() => handleSocialClick('Discord')} className="flex items-center p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 hover:bg-yellow-200 dark:hover:bg-yellow-900/80 transition-colors duration-200">
                <DiscordIcon className="w-10 h-10 text-yellow-500" />
                <div className="ml-4">
                    <p className="font-semibold text-yellow-800 dark:text-yellow-200">Únete al servidor</p>
                    <p className="text-xl font-bold text-yellow-900 dark:text-yellow-100">Discord</p>
                </div>
            </a>
        </div>
    );
};

export default SocialLinks;