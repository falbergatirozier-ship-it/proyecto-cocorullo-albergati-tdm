import React, {Component} from "react";
import CardSerie from "../../Components/CardSerie/CardSerie";
import Filtro from "../../Components/Filtro/Filtro";

class Series extends Component {
    constructor () {
        super ();
        this.state = {
            datos: [],
            page: 1,
            filtroV: "",
            seriesBkp: []
        }
    }

    componentDidMount () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        fetch ("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&page=" + this.state.page)
            .then (res => res.json())
            .then (data => {this.setState(
                {
                    datos: data.results,
                    seriesBkp: data.results,
                    page:this.state.page + 1
                }
            )})
        .catch (e => console.log(e))
    }

    masPeliculas () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        fetch("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&page=" + this.state.page)
            .then(res => res.json())
            .then(data => this.setState(
                {
                    page: this.state.page + 1,
                    datos: this.state.datos.concat(data.results),
                    seriesBkp: this.state.datos.concat(data.results),
                }
            ))
        .catch(e => console.log(e))
    }

    controlarFiltro(event) {
        this.setState({
            filtroV: event.target.value
        },() => {
            const seriesfiltradas = this.state.seriesBkp.filter((objeto)=> objeto.original_name.toLowerCase().includes(this.state.filtroV.toLocaleLowerCase())
            )
            this.setState({
                datos: seriesfiltradas
            }
            )
        });
    }
    
    render () {
        return(
            <React.Fragment>

                <Filtro valor={this.state.filtroV} 
                controlarFiltro={(event) => this.controlarFiltro(event)}/>

                <h2 class="alert alert-primary">Series</h2>

                <section className="row cards" id="tv-show">
                    {
                        this.state.datos.length === 0 ?
                        (<h3>Cargando...</h3>) 
                        :
                        (this.state.datos.map((serie) => <CardSerie data={serie} />))
                    }
                </section>
                <button className="btn btn-info" onClick={() => this.masPeliculas()}>Cargar más</button>
            </React.Fragment>
        )
    }
}

export default Series