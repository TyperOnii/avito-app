export const REJECTION_REASONS = {
    BANNED_PRODUCT: 'Запрещенный товар',
    INCORRECT_CATEGORY: 'Неверная категория',
    INCORRENT_DESCRIPTION: 'Некорректное описание',
    PROBLEMS_PHOTO: 'Проблемы с фото',
    SCAM: 'Подозрение на мошенничество',
    OTHER: 'Другое',
} as const

export type RejectionReason = typeof REJECTION_REASONS[keyof typeof REJECTION_REASONS]