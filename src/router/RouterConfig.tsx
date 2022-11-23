import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GoodNight from '../components/GoodNight'
import Hello from '../components/Hello'
import Tasks from '../components/Tasks'

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Hello />} />
      <Route path="/good_night" element={<GoodNight />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  </BrowserRouter>
)

export default RouterConfig
