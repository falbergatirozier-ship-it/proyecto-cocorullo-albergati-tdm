import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Buscador.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    //this.state = {selector: ""}//
  }
//otro estado y sumar al final de lo que busca el usuario en el buscador /pelicula o serie (el form ya lo sabe porque jusatemtne esta dentro de form)//
  onSubmit(event) {
    event.preventDefault();
    this.props.history.push("/resultados/" + this.state.search); // aca agregar lo que dije arriba?)//
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
          onChange={(event) => this.guardarBusqueda(event)}// o agregar aca?//
          value={this.state.search}/> 
        <button className="btn btn-success btn-sm" type="submit">Buscar</button>
        <select  className="selector">
          <option value="peliculas">Películas</option>
         <option value="series">Series</option>
        </select>
      </form>
    </div>
  );
  }
}

export default withRouter(Buscador);