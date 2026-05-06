import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Product from "./Pages/Product";
import Orders from "./Pages/Orders";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product" element={<Product />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
