import { Routes, Route } from 'react-router-dom'

import * as Pages from './pages'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Login />} />
      <Route path="/register" element={<Pages.Register />} />
    </Routes>
  )
}

export default Router
