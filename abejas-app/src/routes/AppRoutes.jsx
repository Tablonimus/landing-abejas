import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout.jsx'
import Home from '../pages/Home.jsx'
import Timeline from '../pages/Timeline.jsx'
import Museum from '../pages/Museum.jsx'
import Cronicas from '../pages/Cronicas.jsx'
import Players from '../pages/Players.jsx'
import Quotes from '../pages/Quotes.jsx'
import Papers from '../pages/Papers.jsx'
import AfterMatch from '../pages/AfterMatch.jsx'
import Jerseys from '../pages/Jerseys.jsx'
import Shields from '../pages/Shields.jsx'
import Entrevistas from '../pages/Entrevistas.jsx'
import Datos from '../pages/Datos.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tiempo" element={<Timeline />} />
        <Route path="/museo" element={<Museum />} />
        <Route path="/cronicas" element={<Cronicas />} />
        <Route path="/jugadores" element={<Players />} />
        <Route path="/frases" element={<Quotes />} />
        <Route path="/diarios" element={<Papers />} />
        <Route path="/tercer-tiempo" element={<AfterMatch />} />
        <Route path="/camisetas" element={<Jerseys />} />
        <Route path="/escudos" element={<Shields />} />
        <Route path="/entrevistas" element={<Entrevistas />} />
        <Route path="/datos" element={<Datos />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
