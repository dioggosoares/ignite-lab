import { Navigate, Route, Routes } from 'react-router-dom'
import { Classroom } from './pages/Classroom';
import { Subscribe } from './pages/Subscribe';

// IMPORT GRAPHQL CODE
import { useGetLessonsQuery } from './graphql/generated';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />}/>
      <Route path="/classroom" element={<Classroom />}/>
      <Route path="/classroom/lesson/:slugParam" element={<Classroom />}/>
    </Routes>
  )
}
