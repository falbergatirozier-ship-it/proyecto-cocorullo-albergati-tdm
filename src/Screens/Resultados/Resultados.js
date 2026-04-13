import React, { Component } from "react";
import CardPelicula from "../../Components/CardPelicula/CardPelicula"; 
import CardSerie from "../../Components/CardSerie/CardSerie";
import "./Resultados.css"

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  componentDidMount() {
    let busqueda = this.props.match.params.busqueda;
    let tipo = this.props.match.params.tipo;

    fetch(
      "https://api.themoviedb.org/3/search/" + tipo + "?api_key=e5461d9aae0120aac96eb4b937c903f9&language=en-US&query=" + busqueda
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          resultados: data.results
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    let tipo = this.props.match.params.tipo;
    console.log(this.state.resultados);
    
    return (
      <div>
        <h2>Resultados</h2>
        <section className="cards">

        {this.state.resultados.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.resultados.map((resultado, idx) => (
            
            tipo === "movie" ?
            <CardPelicula key={resultado.id + idx} data={resultado} /> : 

            <CardSerie key={resultado.id + idx} data={resultado} />
          ))
        )}
        </section>
      </div>
      
      
    );
  }
}

export default Resultados;