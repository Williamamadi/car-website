import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import "./App.css";
import CarDetails from "./pages/Cardetails";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Login from "./pages/Login";


export default function App() {

  return (
<BrowserRouter>
<AuthProvider>
<Navbar />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="marketplace" element={<Marketplace />} />
<Route path="/cars/:id" element={<CarDetails />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />


         
</Routes>
</main>
<Footer />
<ToastContainer position="top-right" autoClose={3500} />
</AuthProvider>
</BrowserRouter>

  );

}
 