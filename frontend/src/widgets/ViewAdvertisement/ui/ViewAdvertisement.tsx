import { ADVERTISEMENT_API_ROUTES, AdvertisementCard, AdvertisementsList, type Advertisement } from '@/entities/Advertisement'
import { Pagination } from '@/features/Pagination'
import { API_ROOT } from '@/shared/config/api'
import { ROUTES } from '@/shared/config/routes'
import type { PaginationObject } from '@/shared/types/pagination.types'
import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export const ViewAdvertisement = () => {
    const [ads, setAds] = useState<Advertisement[]>([]);
    const [pagination, setPagination] = useState<PaginationObject | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [params, _] = useSearchParams();

    const isHaveParams = params.toString().length > 0;

    useEffect(() => {
        const fetchAds = async () => {
          try {
            const response = await fetch(`${API_ROOT}${ADVERTISEMENT_API_ROUTES.ADVERTISEMENTS}?limit=10${isHaveParams ? `&${params.toString()}` : ''}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            })
            
            if (response.ok) {
              const data = await response.json()
              setAds(data.ads)
              setPagination(data.pagination)
            } else {
              console.log('Ошибка HTTP:', response.status)
            }
          } catch (error) {
            console.log('Ошибка fetch:', error)
          }
        }
        fetchAds()
    }, [params])

    return (
        <>
            <AdvertisementsList ads={ads} renderCard={(ad) => (
              <Link key={ad.id} to={ROUTES.SELECTED_AD.replace(':adId', String(ad.id))}>
                <AdvertisementCard ad={ad}/>
              </Link>
            )}/>
            {pagination && (
            <Pagination 
              totalPages={pagination.totalPages} 
              totalItems={pagination.totalItems} 
              itemsPerPage={pagination.itemsPerPage}
            />
          )}
        </>
    )
}
