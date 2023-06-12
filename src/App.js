import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './Components/Homepage';


function App() {
  return (
    <BrowserRouter>
        <Header />
    <Routes>
        <Route exact path="/" element={<Homepage />}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
