import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Days from './days';
import Forecast from './forecast';
// switch board containing routes for home and the weekly forcast.

const SwitchBoard = () => (
    <main>
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Switch>
                <Route exact path="/" component={Forecast} />
                <Route path="/days" component={Days} />
            </Switch>
        </BrowserRouter>
    </main >
)


export default SwitchBoard;