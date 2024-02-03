import React from "react";
import { Link } from "react-router-dom";

export default function About(){
    return(
        <div>
            <h1>Hi, I am Kaushal Kumar</h1>
            <Link to={"/education"}>Go to Education</Link>
        </div>
    )
}