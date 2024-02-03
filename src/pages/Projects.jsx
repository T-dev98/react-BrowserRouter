import React from "react";
import { Link } from "react-router-dom";

export default function Projects(){
    return(
        <div>
            <h1>I have worked on several projects in my field</h1>
            <Link to={"/contact"}>Contact me</Link>
        </div>
    )
}