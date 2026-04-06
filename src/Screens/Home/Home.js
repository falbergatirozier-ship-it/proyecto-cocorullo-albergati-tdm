import React, {Component} from "react";
import SeccionPeliculas from "../../Components/SeccionPeliculas/SeccionPeliculas";
import Buscador from "../../Components/Buscador/Buscador";
import SeccionSerie from "../../Components/SeccionSeries/SeccionSeries";

class Home extends Component {
  constructor() {
    super();

  }
    
    render () {
        return(
            <React.Fragment>
                <Buscador />
                <h2 class="alert alert-primary">Popular movies this week</h2>
                <SeccionPeliculas />
                <h2 class="alert alert-warning">Popular TV shows this week</h2>
                <SeccionSerie />
            </React.Fragment>
        )
    }
}

export default Home;