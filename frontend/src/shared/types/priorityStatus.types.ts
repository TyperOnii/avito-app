export const PRIORITY_STATUSES = {
    NORMAL: 'normal',
    URGENT: 'urgent',
} as const

export type PriorityStatus = typeof PRIORITY_STATUSES[keyof typeof PRIORITY_STATUSES]