import React from "react";
import {Link} from "react-router-dom";

export default function Contact(){
    return(
        <div>
        <h2>contact page</h2>
        <Link to="/">Back to Home</Link> 
        <Link to="/work">Back to Work</Link> 
        </div>
    )
}