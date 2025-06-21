import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import News from "./pages/news";
import Contractor from "./pages/Contractor";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import About from "./pages/about";
import Gallery from "./pages/Gallery";
import Login from "./pages/login";
import Cart from "./pages/Cart";
import Placeorder from "./pages/Placeorder";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contractors" element={<Contractor />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeorder" element={<Placeorder />} />
        <Route path="/orders" element={<Orders /> } />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
