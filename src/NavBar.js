import React from "react";

import face from "./face.png"
//import yorichi from "./yorichi.jpg"
function NavBar(){
    return(
        <header className="header">
        <img 
            src={face} 
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
    </header>
    )
}

export default NavBar;