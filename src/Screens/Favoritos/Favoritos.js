import React, {Component} from "react";
import CardPelicula from "../../Components/CardPelicula/CardPelicula";
import CardSerie from "../../Components/CardSerie/CardSerie";

class Favoritos extends Component {
    constructor (props) {
        super (props);
        this.state = {
            favoritosPelicula: null,
            favoritosSeries: null
        }

    }
    
    componentDidMount () {
        let storage1 = localStorage.getItem("favoritosmovie")
        let storageParseado1 = JSON.parse(storage1)

        if (storageParseado1.length === 0 || storageParseado1 === null) {
            let peliculasRecuperadas = []
            this.setState({
                favoritosPelicula: peliculasRecuperadas
            })
        } else {
            let peliculasRecuperadas = []

            storageParseado1.map(
                idFav => {
                    fetch("https://api.themoviedb.org/3/movie/" + idFav + "?api_key=e5461d9aae0120aac96eb4b937c903f9")
                        .then(res => res.json())
                        .then(data => {
                            peliculasRecuperadas.push(data)
                            this.setState({
                                favoritosPelicula: peliculasRecuperadas
                            })
                    })
                    .catch(e => console.log(e))
                })
        }

        let storage = localStorage.getItem("favoritostv")
        let storageParseado = JSON.parse(storage)

        if (storageParseado.length === 0 || storageParseado === null) {
            let seriesRecuperadas = []
            this.setState({
                favoritosSeries: seriesRecuperadas
            })
        } else {
            let seriesRecuperadas = []

            storageParseado.map(
                idFav => {
                    fetch("https://api.themoviedb.org/3/tv/" + idFav + "?api_key=e5461d9aae0120aac96eb4b937c903f9")
                        .then(res => res.json())
                        .then(data => {
                            seriesRecuperadas.push(data)
                            this.setState({
                                favoritosSeries: seriesRecuperadas
                            })
                    })
                    .catch(e => console.log(e))
                })
        }        
    }

    render () {
        return(
            <React.Fragment>
                <h2 className="alert alert-primary">Películas favoritas</h2>

                <section className="row cards" id="movies">
                    {
                        this.state.favoritosPelicula === null? (
                            <h3>Cargando...</h3>
                    ) : this.state.favoritosPelicula.length === 0 ? (
                            <h3>No hay peliculas en favoritos.</h3> 
                    ) : (this.state.favoritosPelicula.map((pelicula) => <CardPelicula data={pelicula}/>))
                    }
                </section>

                <h2 class="alert alert-warning">Series favoritas</h2>
                <section class="row cards" id="tv-show">
                    {
                        this.state.favoritosSeries === null? (
                            <h3>Cargando...</h3>
                    ) : this.state.favoritosSeries.length === 0 ? (
                            <h3>No hay series en favoritos.</h3> 
                    ) : (this.state.favoritosSeries.map((serie) => <CardSerie data={serie}/>))
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritos