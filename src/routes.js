import React from 'react';

import { BrowserRouter, Route, Switch} from "react-router-dom"

import GlobalStyles from "./styles/globalStyles"

import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Header from "./components/Header"

function Routes() {
  return (
  <BrowserRouter>
    <Header />

    <Switch>
      
      <Route path="/" exact component={Home}/> 
      <Route path="/cart" component={Cart} />
      
    </Switch>
    <GlobalStyles />
  </BrowserRouter>
  );
}

export default Routes;