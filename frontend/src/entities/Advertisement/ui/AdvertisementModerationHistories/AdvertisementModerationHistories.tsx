import s from './AdvertisementModerationHistories.module.scss'
import type { Advertisement } from '../../model/types/advertisement.types'
import { dateTransform } from '@/shared/utils/dateTransform'
import { mapStatusToRussian } from '@/shared/utils/mapStatusToRussian'

interface AdvertisementModerationHistoriesProps {
    ad: Advertisement,
}

export const AdvertisementModerationHistories = ({ ad }: AdvertisementModerationHistoriesProps) => {

    return (
        <div className={s.card}>
            <h3 className={s.title}>История модерации</h3>
            {ad.moderationHistory.length !== 0 ? 
            <ul className={s.list}>
                {ad.moderationHistory.map((history) => (
                    <li className={s.row} key={history.id}>
                        <span>Модератор: {history.moderatorName}</span>
                        <span>{dateTransform(history.timestamp).date} {dateTransform(history.timestamp).time}</span>
                        <span>Решение: {mapStatusToRussian(history.action)}</span>
                        {history.comment && <span>Комментарий: {history.comment}</span>}
                        {history.reason && <span>Причина: {history.reason}</span>}
                    </li>
                ))}
            </ul>
            : <p>Пусто</p>
            }
        </div>
    )
}
