import React, {Component} from "react";
import Card from "../CardPelicula/CardPelicula";

class SeccionPeliculas extends Component {
    constructor () {
        super ();
        this.state = {
            datos: ""
        }

    }
    
    componentDidMount () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        fetch ("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey)
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
            <section class="row cards" id="movies">
                {
                    this.state.datos == "" ?
                    <h3>Cargando...</h3> :
                    this.state.datos.map((pelicula) => <Card data={pelicula}/>)
                }
            </section>
        )
    }
}

export default SeccionPeliculas