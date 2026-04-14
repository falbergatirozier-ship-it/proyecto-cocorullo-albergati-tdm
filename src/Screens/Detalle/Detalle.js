import React, {Component} from "react";

class Detalle extends Component {
    constructor (props) {
        super (props);
        this.state = {
            datos: null,
            tipo: this.props.match.params.tipo
        }

    }

    componentDidMount () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        let tipo = this.props.match.params.tipo
        let id = this.props.match.params.id
        fetch ("https://api.themoviedb.org/3/" + tipo + "/" + id + "?api_key=" + apiKey)
            .then (res => res.json())
            .then (data => {
                console.log('DATA', data)
                this.setState(
                {
                    datos: data,
                }, ()=> console.log(this.state)
            )})
        .catch (e => console.log(e))
        console.log(this.state.datos);   
    }
    
    render () {
        return(
            <React.Fragment>
                
                {this.state.datos === null? (
                    <h3>Cargando...</h3>
                ) : (this.state.tipo === "movie" ?
                    (
                        <div>
                            <h2 className="alert alert-primary">{this.state.datos.title}</h2>
                            <section className="row">
                                <img src={"https://image.tmdb.org/t/p/w500/" + this.state.datos.poster_path} className="col-md-6" alt="..." />
                                <section className="col-md-6 info">
                                    <h3>DescripNameción</h3>
                                    <p className="description">{this.state.datos.overview}</p>
                                    <p className="mt-0" id="votes"><strong>Género:</strong> {this.state.datos.genres.map(genero => genero.name + " ")}</p>
                                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.datos.release_date}</p>
                                    <p className="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.datos.runtime}</p>
                                    <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.datos.vote_average}</p>
                                </section>
                            </section>
                        </div>
                    )
                : 
                    (
                        <div>
                            <h2 className="alert alert-primary">{this.state.datos.name}</h2>
                            <section className="row">
                                <img src={"https://image.tmdb.org/t/p/w500/" + this.state.datos.poster_path} className="col-md-6" alt="..." />
                                <section className="col-md-6 info">
                                    <h3>DescripNameción</h3>
                                    <p className="description">{this.state.datos.overview}</p>
                                    <p className="mt-0" id="votes"><strong>Género:</strong> {this.state.datos.genres.map(genero => genero.name + " ")}</p>
                                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.datos.first_air_date}</p>
                                    <p className="mt-0 mb-0 length"><strong>Número de temporadas:</strong> {this.state.datos.number_of_seasons}</p>
                                    <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.datos.vote_average}</p>
                                </section>
                            </section>
                        </div>
                    )
                )
                }
            </React.Fragment>
        )
    }
}

export default Detalle
