import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Artworks from "./pages/Artworks";
import Artists from "./pages/Artists";
import Register from "./pages/Register";
import WhatsNew from "./pages/Whatsnew";
import Auctions from "./pages/Auctions";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/artworks" element={<Artworks />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/whatsnew" element={<WhatsNew />} />
        <Route path="/auctions" element={<Auctions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;