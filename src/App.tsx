import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import UserPage from './components/UserPage'
import TodosPage from './components/TodosPage'
import UserItemsPage from './components/UserItemsPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/users'>Пользователи</Link>
        <Link to='/todos'>Список дел</Link>
      </div>
      <Routes>
        <Route path='/users' element={<UserPage />} />

        <Route path='/todos' element={<TodosPage />} />

        <Route path='/users/:id' element={<UserItemsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
