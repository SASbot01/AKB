// UTM Parameter Tracking Utility

/**
 * Captures UTM parameters from URL and stores them in sessionStorage
 * Call this on page load to preserve UTM data throughout the session
 */
export function captureUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);

    const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
        // Additional tracking parameters
        gclid: urlParams.get('gclid') || '', // Google Ads Click ID
        fbclid: urlParams.get('fbclid') || '', // Facebook Click ID
        referrer: document.referrer || '',
        landing_page: window.location.href,
    };

    // Only store if at least one UTM parameter exists
    if (Object.values(utmParams).some(value => value !== '')) {
        sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
        console.log('UTM parameters captured:', utmParams);
    }

    return utmParams;
}

/**
 * Retrieves stored UTM parameters from sessionStorage
 * Returns empty object if no UTM data is stored
 */
export function getUTMParameters() {
    const stored = sessionStorage.getItem('utm_params');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing stored UTM params:', e);
            return {};
        }
    }
    return {};
}

/**
 * Clears stored UTM parameters (useful for testing)
 */
export function clearUTMParameters() {
    sessionStorage.removeItem('utm_params');
}
