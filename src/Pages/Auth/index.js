import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Order from './Order';
import Home from './Home';
import Contact from './Contact';
export default function Auth() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order' element={<Order />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}