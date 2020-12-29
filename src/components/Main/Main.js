import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Donate from '../../pages/Donate/Donate';
// import Signup from '../pages/Signup';

function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/donate' component={Donate}></Route>

        </Switch>
    );
}

export default Main;