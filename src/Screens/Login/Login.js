import React, { Component } from "react";
import FormularioLogin from "../../Components/FormularioLogin/FormularioLogin";

class Login extends Component {
    constructor () {
        super ();

    }
    
    render () {
        return(
            <React.Fragment>
                <h2 className="alert alert-primary">Login</h2>
                <FormularioLogin/>
            </React.Fragment>
        )
    }
}

export default Login