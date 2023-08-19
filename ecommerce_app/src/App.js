/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout'
import Home from './Pages/home'
import About from './Pages/about'
import Shop from './Pages/shop'
import Contact from './Pages/contact'
import Login from './Pages/login'
import Signup from './Pages/signup'
import Forgotpasword from './Pages/forgotpasword'
import Cart from './Pages/cart'
import Checkout from './Pages/checkout'
import Blog from './Pages/blog'
// import Details from './Pages/details'

import './App.css'
import ShopContext from './components/shopcontext'


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <>
    <ShopContext>
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='blog' element={<Blog />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgotpasword' element={<Forgotpasword />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        {/* <Route path='details' element={<Details />} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
    </ShopContext>
    </>
  )
}

export default App