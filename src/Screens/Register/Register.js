import React, { Component } from "react";
import FormularioRegister from "../../Components/FormularioRegister/FormularioRegister";

class Register extends Component {
    constructor () {
        super ();

    }
    
    render () {
        return(
            <React.Fragment>
            <h2 className="alert alert-primary">Registro</h2>
            <FormularioRegister></FormularioRegister>
            </React.Fragment>


            
        )
    }
}

export default Register 