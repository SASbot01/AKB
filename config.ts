// Configuration for external integrations and URLs

export const config = {
    // Go High Level redirect URL - Update this with your actual GHL URL
    goHighLevelUrl: 'https://your-ghl-domain.com/booking-page',

    // Go High Level Webhook URL for form submissions
    // Get this from: GHL → Settings → Workflows → Create Webhook
    ghlWebhookUrl: 'https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID',

    // VSL Video Configuration
    // Update with your video URL when ready
    // Supported formats:
    // - YouTube: 'https://www.youtube.com/embed/VIDEO_ID'
    // - Vimeo: 'https://player.vimeo.com/video/VIDEO_ID'
    // - Self-hosted: '/path/to/video.mp4'
    vslVideoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=1&rel=0',

    // Form submission endpoint (optional - for future integration)
    formSubmitUrl: '',
} as const;

