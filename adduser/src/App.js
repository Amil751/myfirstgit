import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Navbar from "./components/Navbar";
import People from "./components/pages/People";
import Planets from "./components/pages/Planets";
import UserForm from "./components/form/UserForm";
function App() {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
        <Route path="/planets">
          <Planets />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/people/:ID">
          <People />
        </Route>
        <Route path='/'>
          <UserForm/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
