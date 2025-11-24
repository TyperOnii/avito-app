type WordVariants = typeof WORD_VARIANTS[keyof typeof WORD_VARIANTS]

const WORD_VARIANTS = {
    ONE: 'Объявление',
    SOME: 'Объявления',
    MORE: 'Объявлений',
} as const

export const wordCorrector = (count: number): WordVariants => {
    if(count === 1) return WORD_VARIANTS.ONE;

    if([2, 3, 4].includes(count)) return WORD_VARIANTS.SOME;

    return WORD_VARIANTS.MORE

}