import React from "react";
import { Link } from "react-router-dom";

export default function Education(){
    return(
        <div>
            <h1>I am Graduated in B.A</h1>
            <Link to={"/work"}> Go to Work</Link>
        </div>
    )
}