import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GoodMorning, GoodNight, Tasks, Welcome } from '../components'

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/good_night" element={<GoodNight />} />
      <Route path="/good_morning" element={<GoodMorning />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  </BrowserRouter>
)

export default RouterConfig
