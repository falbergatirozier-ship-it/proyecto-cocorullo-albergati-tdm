import React from "react";
import {Link} from "react-router-dom"

function Menu (){
    return(
        <ul className="nav">
            <li class="nav-item"> <Link to="/" >Home</Link> </li>
            <li class="nav-item"> <Link to="/SeccionPeliculas" >Películas</Link> </li>
            <li class="nav-item"> <Link to="/SeccionSeries" >Series</Link> </li>
            <li class="nav-item"> <Link to="/Favoritos" >Favoritos</Link> </li>
            <li class="nav-item log"> <Link to="/Login" >Login</Link> </li>
            <li class="nav-item reg"> <Link to="/Registers" >Register</Link> </li>
        </ul>
    )
}

export default Menu