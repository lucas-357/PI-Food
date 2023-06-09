import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Start from './components/Start';
import Home from './components/Home';
import Details from './components/Details';
import CreateRecipe from './components/CreateRecipe';
import axios from 'axios';
import About from './components/About';


import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Redirect } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:3001";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route
          render={({ location }) => (
            <TransitionGroup className="container">
              <CSSTransition
                appear={true}
                key={location.key}
                timeout={{ enter: 400, exit: 200 }}
                classNames="fade"
              >
                <div className="inner">
                  <Switch key={location.key} location={location}>
                    <Route exact path={'/'} component={Start}></Route>
                    <Route path={'/home'} exact component={Home}></Route>
                    <Route path={"/home/:id"} component={Details}></Route>
                    <Route path={"/recipe"} component={CreateRecipe}></Route>
                    <Route path={"/about"} component={About}></Route>
                    <Redirect to="/"></Redirect>
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </BrowserRouter>
   );
}

export default App;
