import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/index.jsx';
import Home from './components/Home/index.jsx';
import AddCharacter from './components/AddCharacter/index.jsx';
import Details from './components/Details/index.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
        <Route exact path='/characters' element={<Home/>}></Route>
        <Route exact path='/character' element={<AddCharacter/>}></Route>
        <Route exact path='/details/:id' element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
