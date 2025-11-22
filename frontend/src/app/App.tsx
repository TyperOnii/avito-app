import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MainPage } from '../pages/MainPage/MainPage'
import { ROUTES } from '../shared/config/routes'
import { AdvertisementByIdPage } from '../pages/AdvertisementByIdPage/AdvertisementByIdPage'
import { StatsPage } from '../pages/StatsPage/StatsPage'

export const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.LIST} replace />} />
        <Route path={ROUTES.LIST} element={<MainPage />} index/>
        <Route path={ROUTES.SELECTED_AD} element={<AdvertisementByIdPage />} />
        <Route path={ROUTES.STATS} element={<StatsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}
