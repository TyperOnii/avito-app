export const PERIOD = {
    TODAY: 'today',
    WEEK: 'week',
    MONTH: 'month',
    CUSTOM: 'custom'
} as const

export type Period = typeof PERIOD[keyof typeof PERIOD]