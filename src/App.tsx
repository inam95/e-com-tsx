import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.componment";
import { Header } from "./components/header/header.component";

import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
