import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { ScrollManager } from '@/components/ScrollManager'
import { Home } from '@/pages/Home'
import { Privacy } from '@/pages/Privacy'
import { LegalNotice } from '@/pages/LegalNotice'
import { NotFound } from '@/pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="politica-de-privacidade" element={<Privacy />} />
          <Route path="aviso-legal" element={<LegalNotice />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
