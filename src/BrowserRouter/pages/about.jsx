import React from "react";
import {Link} from "react-router-dom";


export default function About(){
    return(
        <div>
            <h2>About Page</h2>
            <Link to="/work">Work</Link>    
            <Link to="/">Back to Home</Link> 
        </div>
    )
}