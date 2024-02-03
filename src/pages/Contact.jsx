import React from "react";
import { Link } from "react-router-dom";

export default function Contacts(){
    return(
        <div>
            <h1>Contact me on my Email</h1>
            <Link to={"/signup"}>Signup</Link>
        </div>
    )
}