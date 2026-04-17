import React, {Component} from "react";
import "./CardPelicula.css"
import {Link} from "react-router-dom"
import Cookies from "universal-cookie";
const cookies = new Cookies();

class CardPelicula extends Component {
    constructor (props) {
        super (props);
        this.state = {
            verMas: false,
            esFav: false
        }
        }
    
    componentDidMount () {
    let storage = localStorage.getItem("favoritosmovie")
    let storageParseado = JSON.parse(storage)

    if (storageParseado !== null) {
        let estaEnFav = storageParseado.includes(this.props.data.id)

        this.setState({
            esFav: estaEnFav
        })
    }
}


    agregarFav (id) {
        let tipo = "movie"
        let storage = localStorage.getItem("favoritos" + tipo)
        let storageParseado = JSON.parse(storage)

        if (storageParseado === null) {
            let primerFav = [id]
            let storageString = JSON.stringify(primerFav)
            localStorage.setItem("favoritos" + tipo,storageString)
        } else {
            storageParseado.push(id)
            let storageString = JSON.stringify(storageParseado)
            localStorage.setItem("favoritos" + tipo,storageString)
        }

        this.setState({
            esFav: true
        })
    }

    sacarFav (id){
        let tipo = "movie"
        let storage = localStorage.getItem("favoritos" + tipo)
        let storageParseado = JSON.parse(storage)

        let storageFiltrado = storageParseado.filter(idx => idx !== id)
        let storageString = JSON.stringify(storageFiltrado)
        localStorage.setItem("favoritos" + tipo,storageString)

        this.setState({
            esFav: false
        })
    }
    
    verMas(){
        this.state.verMas ? this.setState({verMas: false}): this.setState({verMas: true})
    }

    render () {
        return(
            <article className="single-card-movie">
                <img src={"https://image.tmdb.org/t/p/w500/" + this.props.data.poster_path} className="card-img-top"
                    alt="..." />
                <div className="cardBody">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className={this.state.verMas ? "card-text show" : "card-text hide"}>{this.props.data.overview}</p>
                    <button className="mar btn btn-primary" onClick={() => this.verMas()}>{this.state.verMas ? "Ver Menos" : "Ver Más"}</button>
                    <Link className="mar btn btn-primary" to={"/Detalle/movie/" + this.props.data.id}>Detalle</Link>
                    {
                        cookies.get("user") ? (
                            this.state.esFav == false ? (
                            <button onClick={() => this.agregarFav(this.props.data.id)}>🩶</button>
                        ) : (
                            <button onClick={() => this.sacarFav(this.props.data.id)}>♥️</button>
                        )
                    ) : null
                    }
                </div>
            </article>
        )
    }
}

export default CardPelicula
