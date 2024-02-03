import React from "react";
import { Link } from "react-router-dom";

export default function Work(){
    return(
        <div>
            <h1>I am SalesForce Cloud Marketing Professional</h1>
            <Link to={"/projects"}> View my Projects</Link>
        </div>
    )
}