import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Details from './pages/details/Details';
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Login from './pages/login/Login';
import PrivateRouter from './router/PrivateRouter';
import Footer from './components/footer/Footer';
import { useState } from 'react';


function App() {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user") || false
  )
  return (
    <div>
      <Navbar key={currentUser} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path='/' element={<PrivateRouter />} >
          <Route path='' element={<Home currentUser={currentUser} />} />
        </Route>
        <Route path='/details' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
