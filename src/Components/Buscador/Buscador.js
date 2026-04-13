class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      tipo: "movie"
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.history.push(
      "/resultados/" + this.state.tipo + "/" + this.state.search
    );
  }

  guardarBusqueda(event) {
    this.setState({
      search: event.target.value
    });
  }

  guardarTipo(event) {
    this.setState({
      tipo: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={(event) => this.onSubmit(event)}>
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(event) => this.guardarBusqueda(event)}
            value={this.state.search}
          />
          <select
            className="selector"
            onChange={(event) => this.guardarTipo(event)}
            value={this.state.tipo}
          >
            <option value="movie">Películas</option>
            <option value="tv">Series</option>
          </select>
          <button className="btn btn-success btn-sm" type="submit">
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Buscador);