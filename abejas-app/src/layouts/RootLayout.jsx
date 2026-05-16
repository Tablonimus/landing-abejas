import { Outlet } from 'react-router-dom'
import MainLayout from './MainLayout.jsx'

export default function RootLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
