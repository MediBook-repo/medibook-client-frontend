import './App.css'
import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
