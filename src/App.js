import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import PrivateRouter from "./router/PrivateRouter";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import AuthContextProvider from "./context/AuthContextProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AuthContextProvider>
        <ToastContainer/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
