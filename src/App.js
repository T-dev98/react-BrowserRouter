import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Signup from './pages/Signup';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './NavlinkComponent/Navbar';

//Routing using browser Router
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/Signup' element={<Signup/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
