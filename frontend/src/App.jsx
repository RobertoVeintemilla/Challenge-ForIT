import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './pages/TaskList'
import './styles/style.scss'

function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<TaskList />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
