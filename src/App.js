import React, { useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import Main from './components/Main.jsx';
import Login from './components/Login';

import {loginActions} from './actions/loginActions';


function App() {
    const dispatch = useDispatch();

    const allUsers = useSelector(state => state.user);

    useEffect(() => {
        checkLogin();
    }, []);
   
    const checkLogin = () => {
        const loginData = localStorage.getItem('login');
        if (loginData) {
            const parsed = JSON.parse(loginData);
        
            const found =  allUsers.find(user => user.username === parsed.username && user.password === parsed.password);
            if (found) {
                dispatch(loginActions.signIn({
                    username: parsed.username,
                    password: parsed.password,
                    name: parsed.name
                }));
                <Redirect to="/" />
            }
        }
    }

    return (
        <React.Fragment>
            <Switch>
                <Route path="/login" render={
					props => <Login {...props} />
				} />
                <Route path="/" exact render={
					props => <Main {...props} />
				} />
            </Switch>
        </React.Fragment>
    );
}

export default App;