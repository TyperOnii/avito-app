export const CONDITION_STATUSES = {
    NEW: 'Новое',
    USED: 'Б/У',
    EXCELLENT: 'Отличное',
    GOOD: 'Хорошее',
    SATISFACTORY: 'Удовлетворительное'
} as const

export type ConditionStatus = typeof CONDITION_STATUSES[keyof typeof CONDITION_STATUSES]