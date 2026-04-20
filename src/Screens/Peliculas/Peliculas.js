import React, {Component} from "react";
import CardPelicula from "../../Components/CardPelicula/CardPelicula";
import Filtro from "../../Components/Filtro/Filtro";

class Peliculas extends Component {
    constructor () {
        super ();
        this.state = {
            datos: [],
            page: 1,
            filtroV: "",
            peliculasBkp: []
        }
    }

    componentDidMount () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        fetch ("https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&page=" + this.state.page)
            .then (res => res.json())
            .then (data => {this.setState(
                {
                    datos: data.results,
                    peliculasBkp: data.results,
                    page:this.state.page + 1
                }
            )})
        .catch (e => console.log(e))
        }
    
    masPeliculas () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&page=" + this.state.page)
            .then(res => res.json())
            .then(data => this.setState(
                {
                    page: this.state.page + 1,
                    datos: this.state.datos.concat(data.results),
                    peliculasBkp: this.state.datos.concat(data.results),
                }
            ))
        .catch(e => console.log(e))
    }

    controlarFiltro(event) {
        this.setState({
            filtroV: event.target.value
        },() => {
            const peliculafiltradas = this.state.peliculasBkp.filter((objeto)=> objeto.title.toLowerCase().includes(this.state.filtroV.toLocaleLowerCase())
            )
            this.setState({
                datos: peliculafiltradas
            }
            )
        });
    }

    render () {
        return (
            <React.Fragment>

                <Filtro valor={this.state.filtroV} 
                controlarFiltro={(event) => this.controlarFiltro(event)}/>

                <h2 class="alert alert-primary">Peliculas</h2>

                <section className="row cards" id="movies">
                    {
                        this.state.datos.length === 0 ?
                        (<h3>Cargando...</h3>) 
                        : 
                        this.state.datos.map((pelicula) => <CardPelicula data={pelicula} />)
                    }
                </section>
                <button className="btn btn-info" onClick={() => this.masPeliculas()}>Cargar más</button>
            </React.Fragment>
        )
    }
}

export default Peliculas
