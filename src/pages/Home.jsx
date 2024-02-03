import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Hi, Welcome to my profile</h1>
            <Link to={"/about"}>Go to About</Link>
            
        </div>
    )
}