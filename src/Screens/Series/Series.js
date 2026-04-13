import React, {Component} from "react";
import CardSerie from "../../Components/CardSerie/CardSerie";

class Series extends Component {
    constructor () {
        super ();
        this.state = {
            datos: [],
            page: 1
        }
    }

    componentDidMount () {
        let apiKey = "e5461d9aae0120aac96eb4b937c903f9"
        fetch ("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&page=" + this.state.page)
            .then (res => res.json())
            .then (data => {this.setState(
                {
                    datos: data.results,
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
                    datos: this.state.datos.concat(data.results)
                }
            ))
        .catch(e => console.log(e))
    }
    
    render () {
        return(
            <React.Fragment>
                <section className="row cards" id="tv-show">
                    {
                        this.state.datos.length === 0 ?
                        <h3>Cargando...</h3> :
                        this.state.datos.map((serie) => <CardSerie data={serie}/>)
                    }
                </section>
                <button className="btn btn-info" onClick={() => this.masPeliculas()}>Cargar más</button>
            </React.Fragment>
        )
    }
}

export default Series