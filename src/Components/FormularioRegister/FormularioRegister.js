import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./FormularioRegister.css";

class FormularioRegister extends Component{
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: ""
        } 
    }
    guardarEmail(event){
        this.setState({email: event.target.value});
    }

    guardarPassword(event){
        this.setState({password: event.target.value});
    }


    crearCuenta(event){
        event.preventDefault();

        let mail = this.state.email
        let password = this.state.password;
        let usuarioStorage = localStorage.getItem("usuarios");
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

        if (usuarioRepetido) {
            this.setState({ error: "Email no disponible"});
            return
        }

        if (password.length < 6) {
            this.setState({ error: "minimo de caracteres para la contraseña es 6"})
            return
        }

        let usuario = {
            email: mail,
            password: password
        };

        usuarios[usuarios.length] = usuario;

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        this.props.history.push("/login");
    }
    
    render() {
        return(
         <form onSubmit={(event) => this.crearCuenta(event)}>
              <div className="form-group">
                 <label htmlFor="email">Email</label>
                 <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresá tu email"
                    value={this.state.email}
                    onChange={(event) => this.guardarEmail(event)}
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
                    onChange={(event) => this.guardarPassword(event)}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Registrarse
              </button>

              {this.state.error !== "" ? <p className="mt-3 text-center">{this.state.error}</p> : null}
          </form>
          )}
}
export default withRouter(FormularioRegister);