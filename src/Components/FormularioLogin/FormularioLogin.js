import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();


class FormularioLogin extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            error: ""
    }}
    controlarEmail(event){
        this.setState({email: event.target.value});
    }

    controlarPassword(event){
        this.setState({password: event.target.value});
    }

    onSubmit(event){
        event.preventDefault();
        let mail = this.state.email;
        let password = this.state.password;
        let usuarioStorage = localStorage.getItem("usuarios")
        let usuarios;

         if (usuarioStorage !== null){
          usuarios = JSON.parse(usuarioStorage);
          } 

          else{
          usuarios = [];
          }

          let filtroU = usuarios.filter(function(data) {
            return data.email === mail;
        });

        let usuarioRepetido = filtroU.length > 0;

        if (usuarioRepetido === false) {
            this.setState({ error: "Credenciales incorrectas"});
            return
        }

        if (filtroU[0].password !== password) {
            this.setState({ error: "Credenciales incorrectas"})
            return
        }

        cookies.set("user",mail)

        this.props.history.push("/");

        

    }
    render() {
        return(
         <form onSubmit={(event) => this.onSubmit(event)}>
              <div className="form-group">
                 <label htmlFor="email">Email</label>
                 <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresá tu email"
                    value={this.state.email}
                    onChange={(event) => this.controlarEmail(event)}
                />
              </div> 
              
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingresá tu contraseña"
                    value={this.state.password}
                    onChange={(event) => this.controlarPassword(event)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Log in
              </button>

              {this.state.error !== "" ? <p className="mt-3 text-center">{this.state.error}</p> : null}
          </form>
          )}
}
export default withRouter(FormularioLogin)