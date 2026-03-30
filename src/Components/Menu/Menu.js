import React from "react";
import {Link} from "react-router-dom"

function Menu (){
    return(
        <ul className="nav">
            <li className="nav-item"> <Link to="/" >Home</Link> </li>
            <li className="nav-item"> <Link to="/Peliculas" >Películas</Link> </li>
            <li className="nav-item"> <Link to="/Series" >Series</Link> </li>
            <li className="nav-item"> <Link to="/Favoritos" >Favoritos</Link> </li>
            <li className="nav-item log"> <Link to="/Login" >Login</Link> </li>
            <li className="nav-item reg"> <Link to="/Register" >Register</Link> </li>
        </ul>
    )
}

export default Menu