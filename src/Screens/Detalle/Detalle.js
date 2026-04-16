import React, {Component} from "react";

class Detalle extends Component {
    constructor (props) {
        super (props);
        this.state = {
            datos: null,
            tipo: this.props.match.params.tipo,
            esFav: false
        }

    }

    componentDidMount () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        let tipo = this.props.match.params.tipo
        let id = this.props.match.params.id
        fetch ("https://api.themoviedb.org/3/" + tipo + "/" + id + "?api_key=" + apiKey)
            .then (res => res.json())
            .then (data => {
                let storage = localStorage.getItem("favoritos")
                let storageParseado = JSON.parse(storage)

                if (storageParseado !== null) {
                    let estaEnFav = storageParseado.includes(data.id)

                    this.setState({
                        datos: data,
                        esFav: estaEnFav
                    })
                } else {
                    this.setState({
                        datos: data,
                        esFav: false
                    })
                }
            })
        .catch (e => console.log(e))   
        console.log(this.state.datos)
    }

    agregarFav (id) {
        let storage = localStorage.getItem("favoritos")
        let storageParseado = JSON.parse(storage)

        if (storageParseado === null) {
            let primerFav = [id]
            let storageString = JSON.stringify(primerFav)
            localStorage.setItem("favoritos",storageString)
        } else {
            storageParseado.push(id)
            let storageString = JSON.stringify(storageParseado)
            localStorage.setItem("favoritos",storageString)
        }

        this.setState({
            esFav: true
        })
    }

    sacarFav (id){
        let storage = localStorage.getItem("favoritos")
        let storageParseado = JSON.parse(storage)

        let storageFiltrado = storageParseado.filter(idx => idx !== id)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritos",storageString)

        this.setState({
            esFav: false
        })
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
                                    <h3>Descripción</h3>
                                    <p className="description">{this.state.datos.overview}</p>
                                    <p className="mt-0" id="votes"><strong>Género:</strong> {this.state.datos.genres.map(genero => genero.name + " ")}</p>
                                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.datos.release_date}</p>
                                    <p className="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.datos.runtime}</p>
                                    <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.datos.vote_average}</p>
                                    {
                                        this.state.esFav == false ?
                                        <button onClick={() => this.agregarFav(this.state.datos.id)}>🩶</button>
                                        :
                                        <button onClick={() => this.sacarFav(this.state.datos.id)}>♥️</button>
                                    }
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
                                    <h3>Descripción</h3>
                                    <p className="description">{this.state.datos.overview}</p>
                                    <p className="mt-0" id="votes"><strong>Género:</strong> {this.state.datos.genres.map(genero => genero.name + " ")}</p>
                                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.datos.first_air_date}</p>
                                    <p className="mt-0 mb-0 length"><strong>Número de temporadas:</strong> {this.state.datos.number_of_seasons}</p>
                                    <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.datos.vote_average}</p>
                                    {
                                        this.state.esFav == false ?
                                        <button onClick={() => this.agregarFav(this.state.datos.id)}>🩶</button>
                                        :
                                        <button onClick={() => this.sacarFav(this.state.datos.id)}>♥️</button>
                                    }
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
