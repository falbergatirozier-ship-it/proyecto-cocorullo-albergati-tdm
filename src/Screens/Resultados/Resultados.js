import React, { Component } from "react";

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  componentDidMount() {
    let busqueda = this.props.match.params.busqueda;

    fetch(
      "https://api.themoviedb.org/3/search/multi?api_key=e5461d9aae0120aac96eb4b937c903f9&language=en-US&query=" +
        busqueda
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
    return (
      <div>
        <h2>Resultados</h2>

        {this.state.resultados.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.resultados.map((resultado, idx) => (
            <p key={resultado.id + idx}>
              {resultado.title || resultado.name}
            </p>
          ))
        )}
      </div>
    );
  }
}

export default Resultados;