import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Welcome } from '../components'
import GoodNight from '../components/GoodNight'

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/good_night" element={<GoodNight />} />
    </Routes>
  </BrowserRouter>
)

export default RouterConfig
