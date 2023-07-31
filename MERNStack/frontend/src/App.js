import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Book from './components/Book';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AfterLogin from './components/AfterLogin';
import Room from './components/Room';
import CancelBook from './components/CancelBook';
import Logout from './components/Logout';
import RoomBook from './components/RoomBook';
function App() {
  return (
    <div align="center">
    <h1>Welcome to The Oberoi Hotel</h1>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/book" element={<Book />} />
    <Route path="/booked" element={<RoomBook />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cancelbook" element={<CancelBook />} />
    <Route path="/room" element={<Room />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/afterlogin" element={<AfterLogin />} />
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
