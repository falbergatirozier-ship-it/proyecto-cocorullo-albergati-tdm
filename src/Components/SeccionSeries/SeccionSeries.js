import React, {Component} from "react";
import CardSerie from "../CardSerie/CardSerie";
import {Link} from "react-router-dom"
import "./SeccionSeries.css"

class SeccionSerie extends Component {
    constructor () {
        super ();
        this.state = {
            datos: ""
        }

    }
    
    componentDidMount () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        fetch ("https://api.themoviedb.org/3/tv/popular?api_key=" + apiKey)
            .then (res => res.json())
            .then (data => this.setState(
                {
                    datos: data.results.slice(16)
                }
            ))
        .catch (e => console.log(e))
    }

    render () {
        console.log(this.state.datos);
        
        return(
            <React.Fragment>
                <section class="row cards" id="tv-show">
                    {
                        this.state.datos == "" ?
                        <h3>Cargando...</h3> :
                        this.state.datos.map((pelicula) => <CardSerie data={pelicula}/>)
                    }
                </section>
                <Link className="boton-ver-todas" to="/Series" >Ver todas las series</Link>
            </React.Fragment>
        )
    }
}

export default SeccionSerie