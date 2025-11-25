import { AdvertisementDescription, AdvertisementModerationHistories, getAdvertisementById } from "@/entities/Advertisement";
import { Container } from "@/shared/components/Container/Container";
import { ImageSlider } from "@/shared/components/ImageSlider/ImageSlider";
import { ROUTES } from "@/shared/config/routes";
import { ModerationPanel } from "@/widgets/ModerationPanel";
import { ArrowCircleLeftSharp, ArrowCircleRightSharp, ArrowLeft } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom"

export const AdvertisementByIdPage = () => {
  const { adId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['ads', adId],
    queryFn: async () => {
      const data = await getAdvertisementById(Number(adId));
      return data
    }
  })

  if(isLoading) {
    return <p>Загружаем данные</p>
  }

  if(!adId) {
    return <p>Объявления с таким Id не существует</p>
  }

  return (
    <Container>
      {data && 
        <>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', mb: '15px'}}>
            <ImageSlider images={data.images}/>
            <AdvertisementModerationHistories ad={data}/>
            <AdvertisementDescription ad={data}/>
            <ModerationPanel adId={data.id}/>
          </Box>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to={ROUTES.LIST} style={{ display: 'flex'}}><ArrowLeft/> Назад к списку</Link>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px' }}>
              <Link style={{ display: 'flex', columnGap: '6px'}} to={ROUTES.SELECTED_AD.replace(':adId', String(Number(adId) - 1))}><ArrowCircleLeftSharp/> Предыдущий</Link>
              <Link style={{ display: 'flex', columnGap: '6px'}} to={ROUTES.SELECTED_AD.replace(':adId', String(Number(adId) + 1))}>Следующий <ArrowCircleRightSharp/></Link>
            </div>
          </div>
        </>
      }
    </Container>
  )
}
