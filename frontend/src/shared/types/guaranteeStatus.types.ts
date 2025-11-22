export const GUARANTEE_STATUSES = {
    YES: 'Есть',
    NO: 'Нет',
    PARTIAL: 'Частичная',
} as const

export type GuaranteeStatus = typeof GUARANTEE_STATUSES[keyof typeof GUARANTEE_STATUSES]