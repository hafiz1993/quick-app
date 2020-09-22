import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import UserDetail from './Components/UserDetail/UserDetail';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Router>
      
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path ="/user/:userId">
          <UserDetail/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
      
      
    </Router>
  );
}

export default App;
