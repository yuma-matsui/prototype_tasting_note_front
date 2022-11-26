import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoodMorning, GoodNight, Welcome } from '../components'

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/good_night" element={<GoodNight />} />
      <Route path="/good_morning" element={<GoodMorning />} />
    </Routes>
  </BrowserRouter>
)

export default RouterConfig
