import React from "react";
import {Link} from "react-router-dom";

//Home page with link component for routing
export default function Home(){
    return(
        <div>
            <h2>Home Page</h2>
            <Link to="/">Home</Link>    
            <Link to="/about">About</Link> 
        </div>
    )
}