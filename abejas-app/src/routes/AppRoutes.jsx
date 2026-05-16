import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout.jsx'
import Home from '../pages/Home.jsx'
import Timeline from '../pages/Timeline.jsx'
import Museum from '../pages/Museum.jsx'
import Chronicles from '../pages/Chronicles.jsx'
import Players from '../pages/Players.jsx'
import Quotes from '../pages/Quotes.jsx'
import Papers from '../pages/Papers.jsx'
import AfterMatch from '../pages/AfterMatch.jsx'
import Jerseys from '../pages/Jerseys.jsx'
import Shields from '../pages/Shields.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/chronicles" element={<Chronicles />} />
        <Route path="/players" element={<Players />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/aftermatch" element={<AfterMatch />} />
        <Route path="/jerseys" element={<Jerseys />} />
        <Route path="/shields" element={<Shields />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
