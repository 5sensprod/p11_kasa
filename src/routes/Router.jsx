import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Housing from '../pages/Housing'
import NotFound from '../pages/NotFound'

/**
 * Le composant AppRouter est utilisé pour gérer les routes de l'application.
 * Il utilise le composant 'Routes' de 'react-router-dom' pour définir les différentes routes.
 * Chaque 'Route' définit le composant à afficher en fonction du chemin spécifié par 'path'.
 */
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
