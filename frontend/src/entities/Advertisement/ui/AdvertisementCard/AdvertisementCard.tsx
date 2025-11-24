import { Button } from '@/shared/components/Button/Button';
import type { Advertisement } from '../../model/types/advertisement.types'
import s from './AdvertisementCard.module.scss'
import { dateTransform } from '@/shared/utils/dateTransform';
import { mapStatusToRussian } from '@/shared/utils/mapStatusToRussian';
import { mapPriorityStatusToRussian } from '@/shared/utils/mapPriorityStatusToRussian';
import clsx from 'clsx';
import { STATUSES } from '@/shared/types/status.types';

interface AdvertisementCardProps {
    ad: Advertisement,
}

export const AdvertisementCard = (props: AdvertisementCardProps) => {
    const { ad } = props;

    const statusStyle =clsx({
        [s.green]: ad.status === STATUSES.APPROVED,
        [s.red]: ad.status === STATUSES.REJECTED,
        [s.yellow]: ad.status === STATUSES.DRAFT,
        [s.grey]: ad.status === STATUSES.PENDING,
    })

    return (
        <article className={s.card}>
            <img className={s.image} src={ad.images?.[0] ?? ''} alt={`Изображение товара: ${ad.title}`} width={90} height={220} />
            <div className={s.content}>
                <h3 className={s.title}>{ad.title}</h3>
                <div className={s.info}>
                    <div>Цена: {ad.price}₽</div>
                    <div>Категория: {ad.category}</div>
                    <div>Дата создания: {dateTransform(ad.createdAt)}</div>
                    <div>Статус: <span className={statusStyle}><b>{mapStatusToRussian(ad.status)}</b></span></div>
                    <div>Приоритет: <b>{mapPriorityStatusToRussian(ad.priority)}</b></div>
                </div>
                <Button variantType='primary' className={s.button}>Открыть</Button>
            </div>
        </article>
    )
}
