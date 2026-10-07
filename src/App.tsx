import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
