import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserPage from './components/UserPage'
import TodosPage from './components/TodosPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/users'}>
          <UserPage />
        </Route>
        <Route path={'/todos'}>
          <TodosPage />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
