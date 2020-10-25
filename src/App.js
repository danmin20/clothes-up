import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main, Result, Search, List } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list/:id" component={List} />
        <Route path="/search" component={Search} />
        <Route path="/result/:id" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
