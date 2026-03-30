import React, { Component } from "react"
import {withRouter} from "react-router-dom"
class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("props de buscador", this.props)
    this.props.history.push("/busqueda/" + this.state.search)
  }

  guardarBusqueda(event) {
    this.setState(
      { search: event.target.value },
      () => console.log("log desde el setState extendido:", this.state.search))
      console.log("el valor en estado es:" , this.state.search)
  }

  render() {
    return (
    <div>
      <form onSubmit={(event) => this.onSubmit(event)}>
            <label>Buscador...</label>
            <input
            onChange={(event) => this.guardarBusqueda(event)} value={this.state.search} type="submit"/>
          <button type = "submit" >Buscar</button>
      </form>
    </div>
    );
  }
}