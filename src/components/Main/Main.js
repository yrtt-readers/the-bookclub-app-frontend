import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Callback from '../Callback/Callback.js';

import Home from '../../pages/Home/Home';
import Donate from '../../pages/Donate/Donate';
import Signup from '../../pages/Signup/Signup';
import Login from '../../pages/Login/Login';

function LoginPage(props) {
  const { authenticated } = props;

  const logout = () => {
    props.auth.logout();
    props.history.push('/login');
  };

  if (authenticated) {
    const { name } = props.auth.getProfile();
    return (
      <div>
        <h1>Hello! Glad to see you back, {name}.</h1>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Please log in.</h1>
      <button onClick={props.auth.login}>Log in</button>
    </div>
  );
}

function Main(props) {
  const authenticated = props.auth.isAuthenticated();

  return (
    <Switch>
      <Route exact path='/' component={Home}>
        <Callback auth={props.auth} />
      </Route>
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/login' component={Login}>
        <LoginPage
          authenticated={authenticated}
          auth={props.auth}
          history={props.history}
        />
      </Route>
      <Route exact path='/donate' component={Donate}></Route>
    </Switch>
  );
}

export default withRouter(Main);
