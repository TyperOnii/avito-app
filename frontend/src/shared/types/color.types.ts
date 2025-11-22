export const COLORS = {
    BLACK: 'Черный',
    WHITE: 'Белый',
    GREY: 'Серый',
    BLUE: 'Синий',
    RED: 'Красный',
    GREEN: 'Зеленый',
} as const

export type Color = typeof COLORS[keyof typeof COLORS]