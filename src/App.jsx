import React from 'react';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product';
import Header from './components/Header';
import Singleproduct from './components/Productdetailpage/Singleproduct';
import Cart from './pages/Cart';
import LoginPage from './components/Login/LoginPage';
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/Product/:id' element={<Singleproduct/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/LoginPage' element={<LoginPage/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App