
import { useCallback } from 'react';

export const useAnalytics = () => {
    const trackEvent = useCallback((eventName: string, data: Record<string, unknown>) => {
        // In a real application, this would send data to an analytics service
        console.log(`[ANALYTICS] Event: ${eventName}`, data);
    }, []);

    return { trackEvent };
};
