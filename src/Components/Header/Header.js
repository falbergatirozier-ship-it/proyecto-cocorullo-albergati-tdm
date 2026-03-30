import React from "react";
import Menu from "../Menu/Menu";
import "./Header.css"

function Header (){
    
    return (
        <nav>
            <h1 className="Titulo">UdeSA Movies</h1>
            <Menu />
        </nav>
    )
}

export default Header