// Tracking utilities for Facebook Pixel and Google Ads

// Facebook Pixel tracking
export const trackFacebookEvent = (eventName: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, data);
        console.log('Facebook Pixel event tracked:', eventName, data);
    } else {
        console.warn('Facebook Pixel not loaded');
    }
};

// Google Ads conversion tracking
export const trackGoogleAdsConversion = (conversionLabel: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
            'send_to': `AW-CONVERSION_ID/${conversionLabel}`,
            ...data
        });
        console.log('Google Ads conversion tracked:', conversionLabel, data);
    } else {
        console.warn('Google Ads not loaded');
    }
};

// Track lead submission
export const trackLeadSubmission = (leadData: {
    nombre: string;
    email: string;
    telefono: string;
    facturacion?: string;
    tipoNegocio?: string;
    nivelCompromiso?: string;
}) => {
    // Facebook Pixel - Lead event
    trackFacebookEvent('Lead', {
        content_name: 'Lead Form Submission',
        content_category: leadData.tipoNegocio || 'general',
        value: getLeadValue(leadData.facturacion),
        currency: 'EUR',
    });

    // Google Ads - Lead conversion
    trackGoogleAdsConversion('LEAD_CONVERSION_LABEL', {
        value: getLeadValue(leadData.facturacion),
        currency: 'EUR',
    });
};

// Helper to estimate lead value based on billing
const getLeadValue = (facturacion?: string): number => {
    if (!facturacion) return 0;

    const valueMap: Record<string, number> = {
        '<100k': 50,
        '100k-500k': 100,
        '500k-1M': 200,
        '1M-5M': 500,
        '>5M': 1000,
    };

    return valueMap[facturacion] || 0;
};
