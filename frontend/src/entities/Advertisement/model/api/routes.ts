const SLUG = '/ads'

export const ADVERTISEMENT_API_ROUTES = {
    ADVERTISEMENTS: `${SLUG}/`,
    ADVERTISEMENT_BY_ID: (adId: number) => `${SLUG}/${adId}/`,
    ADVERTISEMENT_APPROVE: (adId: number) => `${SLUG}/${adId}/approve/`,
    ADVERTISEMENT_REJECT: (adId: number) => `${SLUG}/${adId}/reject/`,
    ADVERTISEMENT_REQUEST_CHANGES: (adId: number) => `${SLUG}/${adId}/request-changes/`
} as const

