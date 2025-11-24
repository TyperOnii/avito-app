export const dateTransform = (date: string): string => {
    const d = date
    .split('T')[0]
    .split('-')
    .reverse()
    .join('-')

    return d
}