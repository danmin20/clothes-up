import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import result from "./components/result";
import Upload from "./components/upload";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/result" component={result} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
