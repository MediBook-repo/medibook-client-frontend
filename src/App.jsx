import './App.css'
import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
