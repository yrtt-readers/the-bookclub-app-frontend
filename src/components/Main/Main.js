import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Callback from './Callback/Callback';

import Home from '../../pages/Home/Home';
import Donate from '../../pages/Donate/Donate';
import Signup from '../../pages/Signup/Signup';
import Login from '../../pages/Login/Login';

function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={Signup}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/donate' component={Donate}></Route>
    </Switch>
  );
}

export default withRouter(Main);
