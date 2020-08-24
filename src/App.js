import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './modules/home';
import Feed from './containers/posts';
import People from './containers/profiles';
import Profile from './containers/user';
const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/people" exact component={People} />
        <Route path="/people/:id" exact component={Profile} />
        <Route exact path="*">
            <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
