export const PERMISSIONS = {
    APPROVE_ADS: 'approve_ads',
    REJECT_ADS: 'reject_ads',
    REQUEST_CHANGES: 'request_changes',
    VIEW_STATS: 'view_stats',
} as const

export type Permission = typeof PERMISSIONS[keyof typeof PERMISSIONS]