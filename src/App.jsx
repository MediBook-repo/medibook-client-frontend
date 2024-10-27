import './App.css'
import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import Doctors from './pages/Doctors'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Appointment from './components/Appointment'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/doctors'>
          <Route index element={<Doctors />} />
          <Route path=":id" element={<Doctors />} />
        </Route >
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/appointment/:id' element={<Appointment />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
