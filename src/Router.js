import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Itemdetail from './pages/Itemdetail/Itemdetail';
import Itemlist from './pages/Itemlist/Itemlist';
import Cart from './pages/Cart/Cart';
import Signup from './pages/Signup/Signup';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/itemlist/" element={<Itemlist />} />
        <Route path="/detail/" element={<Itemdetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
