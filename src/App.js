
import './App.css';
import { useState , useEffect } from 'react';
import { BrowserRouter, Route, Routes,HashRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemDetails from './components/ItemDetails';
function App() {

  
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<ItemDetails />} />
        </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
