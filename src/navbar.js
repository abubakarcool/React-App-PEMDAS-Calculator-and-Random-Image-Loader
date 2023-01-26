import React from "react";

export default function Navbar({toggleMe}){
    const togglePlease1=()=>{
        toggleMe("calc");
    }
    const togglePlease2=()=>{
        toggleMe("API");
    }

    return(
        <div className="navbar">
            <h2 className="navhtwo">Simple React App</h2>
            <ul className="navList">
                <li className="navListItem">
                    <a  onClick={togglePlease1}>Calculator</a>
                </li>
                <li className="navListItem">
                    <a  onClick={togglePlease2}>API Random Photo</a>
                </li>
            </ul>
        </div>
    );
}