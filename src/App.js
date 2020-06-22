import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import Home from "./components/Home";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customerForm" component={CustomerForm} />
        <Route path="/customerList" component={CustomerList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
