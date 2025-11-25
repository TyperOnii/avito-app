import s from './AdvertisementDescription.module.scss'
import type { Advertisement } from '../../model/types/advertisement.types'
import { wordCorrector } from '../../utils/wordCorrector';
import { dateTransform } from '@/shared/utils/dateTransform';

interface AdvertisementDescriptionProps {
    ad: Advertisement,
}

export const AdvertisementDescription = (props: AdvertisementDescriptionProps) => {
    const { ad } = props;

    return (
        <article className={s.card}>
            <h3>Полное описание</h3>
            <p>{ad.description}</p>
            <h3>Характеристики</h3>
            <div>
                {Object.entries(ad.characteristics).map(([prop, value]) => (
                    <div className={s.row} key={`${prop}-${value}`}>
                        <span><b>{prop}:</b></span>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
            <div>
                <div className={s.row}>
                    <span>Продавец:</span>
                    <span>{ad.seller.name}</span>
                    <span>Рейтинг: {ad.seller.rating}</span>
                </div>
                <div className={s.row}>
                    <span>{ad.seller.totalAds} {wordCorrector(ad.seller.totalAds)}</span>
                    <span>|</span>
                    <span>На сайте с {dateTransform(ad.seller.registeredAt).date}</span>
                </div>
            </div>
        </article>
    )
}
