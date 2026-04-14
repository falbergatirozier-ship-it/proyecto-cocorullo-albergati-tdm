import React, {Component} from "react";
import "./CardPelicula.css"
import {Link} from "react-router-dom"

class CardPelicula extends Component {
    constructor (props) {
        super (props);
        this.state = {
            verMas: false
        }
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
                </div>
            </article>
        )
    }
}

export default CardPelicula
