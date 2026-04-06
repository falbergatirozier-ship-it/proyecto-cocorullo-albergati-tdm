import React, {Component} from "react";
import SeccionPeliculas from "../../Components/SeccionPeliculas/SeccionPeliculas";

class Home extends Component {
    constructor () {
        super ();

    }
    
    render () {
        return(
            <React.Fragment>
                <h2 class="alert alert-primary">Popular movies this week</h2>
                <SeccionPeliculas />
            </React.Fragment>
        )
    }
}

export default Home