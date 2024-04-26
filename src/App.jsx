import "./App.css";
import Categories from "./componets/Categories/Categories";
import Footer from "./componets/footer/Footer";
import Hero from "./componets/hero/Hero";
import Navbar from "./componets/navbar/Navbar";
import Recents from "./componets/recents/Recents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/home/Home";
import Details from "./componets/details/Details";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
