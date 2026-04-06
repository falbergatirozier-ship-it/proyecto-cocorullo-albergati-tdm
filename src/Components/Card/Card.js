import React, {Component} from "react";
import "./Card.css"

class Card extends Component {
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
                    <button className="more btn btn-primary" onClick={() => this.verMas()}>{this.state.verMas ? "Ver Menos" : "Ver Más"}</button>
                </div>
            </article>
        )
    }
}

export default Card