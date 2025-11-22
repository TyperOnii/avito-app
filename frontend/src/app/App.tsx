import { ROUTES } from '@shared/config/routes'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './Layout'
import { ThemeProvider } from './providers/ThemeProvider/ThemeProvider'
import { AdvertisementByIdPage } from '@pages/AdvertisementByIdPage/AdvertisementByIdPage'
import { MainPage } from '@pages/MainPage/MainPage'
import { StatsPage } from '@pages/StatsPage/StatsPage'


export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
              <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.LIST} replace />} />
              <Route path={ROUTES.LIST} element={<MainPage />} index/>
              <Route path={ROUTES.SELECTED_AD} element={<AdvertisementByIdPage />} />
              <Route path={ROUTES.STATS} element={<StatsPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
