import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';

const myconst = '5';
export interface MyInt {
    type1: number;
    type2: string;
}

const nameConst1: MyInt = {
    type1: 5,
    type2: '5'
} ;

export interface MyInt1 extends MyInt {
    type4: boolean;
}



export default () =>
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' children={({ ...props }) => {
                    return <LoginPage />;
                }} />
                <Route path='/home' children={({ ...props }) => {
                    return <HomePage />;
                }} />
            </Switch>
        </App>
    </BrowserRouter>;