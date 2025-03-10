import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import App from './App';
import Not from './Not';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Not />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;