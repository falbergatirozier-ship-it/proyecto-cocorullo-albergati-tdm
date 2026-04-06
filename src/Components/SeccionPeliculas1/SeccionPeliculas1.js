import React, {Component} from "react";
import CardPelicula1 from "../CardPelicula1/CardPelicula1";

class Peliculas extends Component {
    constructor () {
        super ();
        this.state = {
            datos: ""
        }

    }
    
    componentDidMount () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        let i = 1
        fetch ("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page="+{i}+"&sort_by=popularity.desc?api_key=" + apiKey)
            .then (res => res.json())
            .then (data => this.setState(
                {
                    datos: data.results
                }
            ))
        .catch (e => console.log(e))
    }

    render () {
        return(
            <section class="row cards" id="movies">
                {
                    this.state.datos == "" ?
                    <h3>Cargando...</h3> :
                    this.state.datos.map((pelicula) => <CardPelicula1 data={pelicula}/>)
                }
            </section>
        )
    }
}

export default Peliculas