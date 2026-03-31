import React, { Component } from "react";
import Buscador from "../../Components/Buscador/Buscador";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Buscador />
      </div>
    );
  }
}

export default Home;