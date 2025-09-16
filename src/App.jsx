import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product';
import Header from './components/Header';
import Singleproduct from './components/Productdetailpage/Singleproduct';
import Cart from './pages/Cart';
import LoginPage from './components/Login/LoginPage';
import Footer from './components/Footer';
import CheckoutPage from './components/cartPage/CheckoutPage';
import axios from "axios";
import Relatedproduct from "./components/Productdetailpage/Relatedproduct";
import Wishlist from './pages/Wishlist';
import PaymentPage from './components/cartPage/PaymentPage'
 
const App = () => {
  const [geolocation, setGeoLocation] = useState(null)

 const getLocation = async () => {
  navigator.geolocation.getCurrentPosition(async pos => {
    const { latitude, longitude } = pos.coords;

    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try {
      const res = await fetch(url);
      const data = await res.json();
        setGeoLocation(data.address);
      console.log(location);
    } catch (error) {
      console.log("Error fetching location:", error);
    }
  });
};

  useEffect(() => {
    getLocation()
  }, [])



  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/Product/:id' element={<Singleproduct/>}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/CheckoutPage' element={<CheckoutPage   geoLocation={geolocation}/>} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='/PaymentPage' element={<PaymentPage />} />
      
      </Routes>
       {/* <Relatedproduct /> */}
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App