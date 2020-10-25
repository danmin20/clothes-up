import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main, Result, Search, Man, Woman } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
        <Route path="/result" component={Result} />
        <Route path="/woman" component={Woman} />
        <Route path="/man" component={Man} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
