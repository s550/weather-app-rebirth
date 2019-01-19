import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Days from './days';
import Forecast from './forecast';
// switch board containing routes for home and the weekly forcast.
const SwitchBoard = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Forecast}/>
            <Route path="/days" component={Days}/>
        </Switch>
    </main>
)


export default SwitchBoard;