import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Counter from './Counter';
import Not from './Not';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="*" element={<Not />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;