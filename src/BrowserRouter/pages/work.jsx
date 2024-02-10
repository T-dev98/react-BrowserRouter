import React from "react";
import {Link} from "react-router-dom";

export default function Work(){
    return(
        <div>
        <h2>Work page</h2>
        <Link to="/contact">Contact</Link>    
        <Link to="/about">Back to About</Link> 
        </div>
    )
}