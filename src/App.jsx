import './App.css'
import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import Doctors from './pages/Doctors'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Appointment from './components/Appointment'
import CreateAccount from './pages/CreateAccount'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function App() {

  // temp auth
  const isUserLoggedIn = true;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == '/myprofile') {
      if (!isUserLoggedIn) {
        navigate('/login');
        return;
      }

      navigate('/myprofile');
    }

    if (location.pathname == '/login') {
      if (isUserLoggedIn) {
        navigate('/');
        return;
      }
      navigate('/login');
    }

    if (location.pathname == '/createaccount') {
      if (isUserLoggedIn) {
        navigate('/');
        return;
      }
      navigate('/createaccount');
    }
  }, [location])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/doctors'>
          <Route index element={<Doctors />} />
          <Route path=":id" element={<Doctors />} />
        </Route >
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/appointment/:id' element={<Appointment />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myprofile' element={<MyProfile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
