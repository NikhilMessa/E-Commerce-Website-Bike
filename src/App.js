import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Promotion Pages
import Helmet from "./components/Pages/Helmet";
import Jersey from "./components/Pages/Jersey";

// Pages
import Signin from "./components/Pages/Signin";
import CreateAccount from "./components/Pages/CreateAccount";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Cart from "./components/Pages/Cart";
import Bikes from "./components/Pages/Bikes";
import Mountain from "./components/Pages/Mountain";
import BMX from "./components/Pages/BMX";
import Electric from "./components/Pages/Electric";

//Bike Pages
import KonaProcess from "./components/Pages/BikePages/KonaProcess";
import KonaSatori from "./components/Pages/BikePages/KonaSatori";
import MarinHawk from "./components/Pages/BikePages/MarinHawk";
import GTForce from "./components/Pages/BikePages/GTForce";
import MarinSan from "./components/Pages/BikePages/MarinSan";
import GTLabomba from "./components/Pages/BikePages/GTLabomba";
import OrbeaM20 from "./components/Pages/BikePages/OrbeaM20";
import OrbeaM30 from "./components/Pages/BikePages/OrbeaM30";
import OrbeaH30 from "./components/Pages/BikePages/OrbeaH30";
import Benno10D from "./components/Pages/BikePages/Benno10D";
import Benno9D from "./components/Pages/BikePages/Benno9D";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/helmet" component={Helmet} />
        <Route path="/jersey" component={Jersey} />
        <Route path="/bikes" component={Bikes} />
        <Route path="/mountain" component={Mountain} />
        <Route path="/bmx" component={BMX} />
        <Route path="/electric" component={Electric} />
        <Route path="/signin" component={Signin} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/konaprocess" component={KonaProcess} />
        <Route path="/konasatori" component={KonaSatori} />
        <Route path="/marinhawk" component={MarinHawk} />
        <Route path="/gtforce" component={GTForce} />
        <Route path="/marinsan" component={MarinSan} />
        <Route path="/gtlabomba" component={GTLabomba} />
        <Route path="/m20" component={OrbeaM20} />
        <Route path="/m30" component={OrbeaM30} />
        <Route path="/h30" component={OrbeaH30} />
        <Route path="/10d" component={Benno10D} />
        <Route path="/ejoy9d" component={Benno9D} />
        <Route path="/aboutus" component={About} />
        <Route path="/cart" component={Cart} />
      </PageWrapper>
    </Router>
  );
}

export default App;
