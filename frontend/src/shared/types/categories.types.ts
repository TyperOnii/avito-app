export const CATEGORIES  = {
    ELECTRONICS: 'Электроника',
    REALTY: 'Недвижимость',
    TRANSPORT: 'Транспорт',
    WORK: 'Работа',
    SERVICES: 'Услуги',
    ANIMALS: 'Животные',
    FASHION: 'Мода',
    BABY: 'Детское',
} as const

export type Category = typeof CATEGORIES [keyof typeof CATEGORIES]