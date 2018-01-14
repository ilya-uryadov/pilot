import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';

export default () =>
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' children={({ ...props }) => {
                    return <LoginPage {...props} />
                }} />
                <Route path='/home' children={({ ...props }) => {
                    return <HomePage {...props} />
                }} />
            </Switch>
        </App>
    </BrowserRouter>;