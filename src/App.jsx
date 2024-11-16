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
import MyAppointments from './pages/MyAppointments'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const isUserLoggedIn = true; // Temporary authentication status

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/doctors'>
          <Route index element={<Doctors />} />
          <Route path=":id" element={<Doctors />} />
        </Route >
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/appointment/:id" element={<Appointment />} />

        {/* Only show CreateAccount and Login if user is NOT logged in */}
        <Route
          path="/createaccount"
          element={isUserLoggedIn ? <Navigate to="/" /> : <CreateAccount />}
        />
        <Route
          path="/login"
          element={isUserLoggedIn ? <Navigate to="/" /> : <Login />}
        />

        {/* Only show MyProfile and MyAppointments if user IS logged in */}
        <Route
          path="/myprofile"
          element={isUserLoggedIn ? <MyProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/myappointments"
          element={isUserLoggedIn ? <MyAppointments /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
