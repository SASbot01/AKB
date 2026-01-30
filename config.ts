// Configuration for external integrations and URLs

export const config = {
    // Go High Level redirect URL - Update this with your actual GHL URL
    goHighLevelUrl: 'https://your-ghl-domain.com/booking-page',

    // n8n Webhook URL for form submissions (PRODUCTION)
    // Automation workflow endpoint
    ghlWebhookUrl: 'https://blackwolfenterprises.app.n8n.cloud/webhook/f484964d-42f5-460c-bc08-0ea85cda25a8',

    // VSL Video Configuration
    // Google Drive video embed URL with controls hidden
    vslVideoUrl: 'https://drive.google.com/file/d/1h5723JkrROcj_yp2OjPCZRI18xPTL9q4/preview?controls=0&modestbranding=1',

    // Tracking Pixels Configuration
    // Facebook Pixel ID - Get from Facebook Events Manager
    facebookPixelId: '25021654470847677',

    // Google Ads Conversion ID - Get from Google Ads
    googleAdsId: 'AW-CONVERSION_ID',
    googleAdsLeadLabel: 'LEAD_CONVERSION_LABEL',

    // Form submission endpoint (optional - for future integration)
    formSubmitUrl: '',
} as const;

