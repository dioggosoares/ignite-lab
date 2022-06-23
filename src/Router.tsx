import { Route, Routes } from 'react-router-dom'
import { Classroom } from './pages/Classroom';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/classroom" element={<Classroom />}/>
      <Route path="/classroom/lesson/:slug" element={<Classroom />}/>
    </Routes>
  )
}