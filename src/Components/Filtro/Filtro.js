import React, { Component } from "react";
import "./Filtro.css";

class Filtro extends Component {
  evitarSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="filter-form px-0 mb-3" onSubmit={(event) => this.evitarSubmit(event)}>
        <input
          type="text"
          placeholder="Buscar..."
          value={this.props.valor}
          onChange={(event) => this.props.controlarFiltro(event)}
        />
      </form>
    );
  }
}

export default Filtro;