// Configuration for external integrations and URLs

export const config = {
    // Go High Level redirect URL - Update this with your actual GHL URL
    goHighLevelUrl: 'https://your-ghl-domain.com/booking-page',

    // Go High Level Webhook URL for form submissions
    // Get this from: GHL → Settings → Workflows → Create Webhook
    ghlWebhookUrl: 'https://services.leadconnectorhq.com/hooks/Xnbqlch5urDqQ4LWzSY1/webhook-trigger/fb364ea8-2659-4ea9-8440-53d1220dcdeb',

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

