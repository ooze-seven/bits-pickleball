import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Courts } from './pages/Courts'
import { Home } from './pages/Home'
import { Membership } from './pages/Membership'
import { Programs } from './pages/Programs'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courts" element={<Courts />} />
        <Route path="programs" element={<Programs />} />
        <Route path="membership" element={<Membership />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
