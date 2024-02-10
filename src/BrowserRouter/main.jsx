import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../BrowserRouter/pages/home";
import About from "../BrowserRouter/pages/about";
import Work from "../BrowserRouter/pages/work";
import Contact from "../BrowserRouter/pages/contact";

// routing using Browser router
export default function Main(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="work" element={<Work/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}