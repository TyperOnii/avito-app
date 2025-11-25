import { AdvertisementCard, AdvertisementsList, getAdvertisements } from '@/entities/Advertisement'
import { Pagination } from '@/features/Pagination'
import { ROUTES } from '@/shared/config/routes'
import { useQuery } from '@tanstack/react-query'
import { Link, useSearchParams } from 'react-router-dom'

export const ViewAdvertisement = () => {
  const [params, _] = useSearchParams();

  const { data, isLoading } = useQuery({
      queryKey: ['ads', params.toString()],
      queryFn: async () => {
        const data = await getAdvertisements(params)
        return data
      }
    })

    if(isLoading) {
      return <p>Загружаем данные</p>
    }

    return (
        <> {data && 
        <>
            <AdvertisementsList ads={data?.ads || []} renderCard={(ad) => (
              <Link key={ad.id} to={ROUTES.SELECTED_AD.replace(':adId', String(ad.id))}>
                <AdvertisementCard ad={ad}/>
              </Link>
            )}/>
            {data?.pagination && (
            <Pagination 
              totalPages={data?.pagination.totalPages} 
              totalItems={data?.pagination.totalItems} 
              itemsPerPage={data?.pagination.itemsPerPage}
            />
          )}
        </>}
        </>
    )
}
