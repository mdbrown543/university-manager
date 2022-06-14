import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

const App = () => {
  return (
    <div className="App">
      {/* /add   /edit/:id  */}
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path="*" element={<Home/> }/>
        <Route path="/add" element={<AddStudent/>}/>
        <Route path="/edit/:id" element={<EditStudent/>}/>
      </Routes>
    </div>
  );
}

export default App;
