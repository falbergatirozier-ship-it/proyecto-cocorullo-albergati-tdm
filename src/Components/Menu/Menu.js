import React from "react";
import {Link} from "react-router-dom"
import "./Menu.css"
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Menu (){
    return(
    <nav>
        <ul className="nav nav-tabs my-4">
                <li className="nav-item"> <Link className="nav-link" to="/" >Home</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/Peliculas" >Películas</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/Series" >Series</Link> </li>
                {
                    cookies.get("user") ? (
                        <li className="nav-item"> <Link className="nav-link" to="/Favoritos" >Favoritos</Link> </li>
                    ) : null
                }
                <li className="nav-item ml-auto"> <Link className="nav-link" to="/Register" >Register</Link> </li>
                <li className="nav-item"> <Link className="nav-link" to="/Login" >Login</Link> </li>
            </ul>
    </nav>
    )
}

export default Menu