import s from './AdvertisementsList.module.scss'
import type { Advertisement } from '../../model/types/advertisement.types'
import { AdvertisementCard } from '../AdvertisementCard/AdvertisementCard';
import type { JSX } from '@emotion/react/jsx-runtime';

interface AdvertisementsListProps {
    ads: Advertisement[],
    renderCard?: (ad: Advertisement) => JSX.Element
}

export const AdvertisementsList = (props: AdvertisementsListProps) => {
    const { ads, renderCard=(ad)=> <AdvertisementCard ad={ad} key={ad.id}/>} = props;

    if(ads.length === 0) {
        return 'Ничего не найдено'
    }

    return (
        <ul className={s.list}>
            {ads.map(renderCard)}
        </ul>
    )
}
