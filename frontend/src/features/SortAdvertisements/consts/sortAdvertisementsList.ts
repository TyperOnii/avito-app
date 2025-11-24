export const SORT_ADVERTISEMENTS_LIST = [
    {
        label: 'Сначала новые',
        value: 'createdAt-desc'
    },
    {
        label: 'Сначала старые',
        value: 'createdAt-asc'
    },
    {
        label: 'По цене (по возрастанию)',
        value: 'price-asc'
    },
    {
        label: 'По цене (по убыванию)',
        value: 'price-desc'
    },
    {
        label: 'Сначала с приоритетом "срочно"',
        value: 'priority-desc'
    },
    {
        label: 'Сначала с приоритетом "нормально"',
        value: 'priority-asc'
    },
] as const