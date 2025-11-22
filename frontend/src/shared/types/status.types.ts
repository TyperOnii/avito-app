export const STATUSES = {
    PENDING: 'pending',
    APPROVED: 'approved',
    REJECTED: 'rejected',
    DRAFT: 'draft',
} as const

export type Status = typeof STATUSES[keyof typeof STATUSES]