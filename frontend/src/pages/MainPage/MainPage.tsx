import s from './MainPage.module.scss'
import { Container } from "@/shared/components/Container/Container"
import { ViewAdvertisement } from "@/widgets/ViewAdvertisement"
import { FilterAdvertisements } from "@/features/FilterAdvertisements"
import { SortAdvertisements } from '@/features/SortAdvertisements'

export const MainPage = () => {
  return (
    <section>
      <Container className={s.page}>
        <FilterAdvertisements/>  
        <SortAdvertisements/>
        <ViewAdvertisement/>
      </Container>
    </section>
  )
}
