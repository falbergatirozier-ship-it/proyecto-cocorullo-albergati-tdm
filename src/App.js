import React from "react";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home"
import Peliculas from "./Screens/Peliculas/Peliculas"
import Series from "./Screens/Series/Series"
import Favoritos from "./Screens/Favoritos/Favoritos"
import Login from "./Screens/Login/Login"
import Register from "./Screens/Register/Register"

function App() {
  return (
    <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Peliculas" component={Peliculas} />
          <Route path="/Series" component={Series} />
          <Route path="/favoritos" component={Favoritos} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
