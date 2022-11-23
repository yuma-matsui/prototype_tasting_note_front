import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GoodNight from '../components/GoodNight'
import Hello from '../components/Hello'

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Hello />} />
      <Route path="/good_night" element={<GoodNight />} />
    </Routes>
  </BrowserRouter>
)

export default RouterConfig
