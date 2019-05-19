import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Launch from './pages/Launch';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/launches/:id' component={Launch} />
        </Switch>
    </BrowserRouter>
)

export default Routes;