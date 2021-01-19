import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Donate from '../../pages/Donate/Donate';
import Request from '../../pages/Request/Request';
import Checkout from '../../pages/Checkout/Checkout';
import RequestCheckout from '../../pages/RequestCheckout/RequestCheckout';
import Contact from '../../pages/Contact/Contact';
import Signup from '../../pages/Signup/Signup';
import Login from '../../pages/Login/Login';
import DonateConfirm from '../../pages/DonateConfirm/DonateConfirm';
import RequestConfirm from '../../pages/RequestConfirm/RequestConfirm';
//import Shipping from '../../pages/Shipping/Shipping';

function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/donate' component={Donate}></Route>
            <Route exact path='/request' component={Request}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/checkout-donation' component={Checkout}></Route>
            <Route exact path='/confirm-donation' component={DonateConfirm}></Route>
            <Route exact path='/checkout-request' component={RequestCheckout}></Route>
            <Route exact path='/confirm-request' component={RequestConfirm}></Route>
            {/* <Route exact path='/shipping' component={Shipping}></Route> */}
        </Switch>
    );
}

export default Main;