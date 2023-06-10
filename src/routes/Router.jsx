import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Listing from '../pages/Listing'
import NotFound from '../pages/NotFound'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
