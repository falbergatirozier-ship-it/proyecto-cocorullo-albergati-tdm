import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Buscador.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.history.push("/resultados/" + this.state.search);
  }

  guardarBusqueda(event) {
    this.setState(
      { search: event.target.value },
      () => console.log(this.state.search)
    );
  }

  render() {
  return (
    <div>
      <form className="search-form" onSubmit={(event) => this.onSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(event) => this.guardarBusqueda(event)}
          value={this.state.search}/>
        <button className="btn btn-success btn-sm" type="submit">Buscar</button>
        <select className="selector">
          <option value="peliculas">Películas</option>
         <option value="series">Series</option>
        </select>
      </form>
    </div>
  );
  }
}

export default withRouter(Buscador);