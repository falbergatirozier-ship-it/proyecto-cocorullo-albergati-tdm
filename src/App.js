import React from "react";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home"
import Peliculas from "./Screens/Peliculas/Peliculas"
import Series from "./Screens/Series/Series"
import Favoritos from "./Screens/Favoritos/Favoritos"
import Login from "./Screens/Login/Login"
import Register from "./Screens/Register/Register"
import Footer from "./Components/Footer/Footer";
import Resultados from "./Screens/Resultados/Resultados";
import Detalle from "./Screens/Detalle/Detalle"

function App() {
  return (
    <React.Fragment>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/Peliculas" component={Peliculas} />
            <Route path="/Series" component={Series} />
            <Route path="/favoritos" component={Favoritos} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/detalle/:tipo/:id" component={Detalle} />
            <Route path="/resultados/:tipo/:busqueda" component={Resultados} />

          </Switch>

          <Footer />
        </div>
    </React.Fragment>
  );
}

export default App;
