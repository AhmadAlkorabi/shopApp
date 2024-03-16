
import './App.css';
import { useState , useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemDetails from './components/ItemDetails';
function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<ItemDetails />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
