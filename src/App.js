import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Signup from './pages/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Routing using createBrowserRouter
function App() {

  const router = createBrowserRouter([
    {path: "/", element: <Home /> },
    {path: "/about", element: <About /> },
    {path: "/education", element: <Education /> },
    {path: "/work", element: <Work /> },
    {path: "/projects", element: <Projects /> },
    {path: "/contact", element: <Contact /> },
    {path: "/signup", element: <Signup /> }
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
