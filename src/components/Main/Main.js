import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Donate from '../../pages/Donate/Donate';
import Request from '../../pages/Request/Request';
import Signup from '../../pages/Signup/Signup';
import Login from '../../pages/Login/Login';

function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/donate' component={Donate}></Route>
            <Route exact path='/request' component={Request}></Route>
        </Switch>
    );
}

export default Main;