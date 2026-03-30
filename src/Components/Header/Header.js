import React from "react";
import Menu from "../Menu/Menu";
import "./Header.css"

function Header (){
    
    return (
        <React.Fragment>
            <h1>UdeSA Movies</h1>

            <Menu />
        </React.Fragment>    
    )
}

export default Header