
interface MappedDate {
    date: string,
    time: string,
}

export const dateTransform = (dateISO: string): MappedDate => {
    const [date, time] = dateISO.split('T');
    const formattedDate = date
    .split('-')
    .reverse()
    .join('.')

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [hour, minute, ...other] = time.split(':');


    return {
        date: formattedDate,
        time: `${hour}:${minute}`
    }
}